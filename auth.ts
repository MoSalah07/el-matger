import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db"; // تأكد إن prisma.ts فيه PrismaClient
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { type DefaultSession } from "next-auth";
import authConfig from "./auth.config";

// تعريف الــ User في NextAuth لتمديد session
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  pages: {
    signIn: "/sign-in",
    newUser: "/sign-up",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 يوم
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    // جوجل Google Provider
    GoogleProvider({
      allowDangerousEmailAccountLinking: true,
    }),

    // تسجيل الدخول باستخدام البريد وكلمة المرور
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // التأكد من وجود البريد وكلمة المرور
        if (
          !credentials?.email ||
          typeof credentials.email !== "string" ||
          !credentials.password ||
          typeof credentials.password !== "string"
        ) {
          return null;
        }

        // البحث عن المستخدم في قاعدة البيانات
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // التأكد من وجود المستخدم وكلمة المرور
        if (!user || !user.password) return null;

        // مقارنة كلمة المرور المدخلة مع المخزنة
        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isMatch) return null;

        // إرجاع بيانات المستخدم بعد التحقق
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    // تحديث توكن الـ JWT
    async jwt({ token, user, trigger, session }) {
      if (user) {
        // التأكد من البيانات المفقودة وتحديث التوكن
        const u = user as { name?: string; email?: string; role?: string };
        token.name = u.name ?? u.email?.split("@")[0];
        token.role = u.role ?? "user"; // إضافة role إلى التوكن
      }
      // تحديث الـ session بناءً على التوكن
      if (trigger === "update" && session?.user?.name) {
        token.name = session.user.name;
      }
      return token;
    },

    // تحديث الـ session بناءً على التوكن
    async session({ session, token, user, trigger }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.role = token.role as string;
        session.user.name = token.name;
      }

      if (trigger === "update" && user?.name) {
        session.user.name = user.name;
      }

      return session;
    },
  },
});
