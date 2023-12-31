
"use client"
import useProtectedRoute from "@/hooks/common/useProtectedRoute";
import "../globals.scss";
import RequestTapbar from "@/components/request/RequestTapbar";
import { Loader } from "@mantine/core";
import Navbar from "@/components/global/Navbar";


export default function RootLayout({ children }) {
  const { isLoading } = useProtectedRoute();

  if (!isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Loader size="xl" color="pink" />
    </div>
  }

  return (
    <div>
      <Navbar></Navbar>
      <RequestTapbar></RequestTapbar>
      {children}
    </div>
  );
}
