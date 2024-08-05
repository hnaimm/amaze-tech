"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const access_token =
        localStorage && localStorage.getItem("access_token")
          ? localStorage.getItem("access_token")
          : undefined;

      if (access_token) {
        setLoading(false);
      } else {
        router.push("login?source=wishlist");
      }
    }, 200);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return loading ? null : children;
};

export default ProtectedRoute;
