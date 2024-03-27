"use client";

import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/stack";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <Stack className="wrapper h-full items-center justify-center" gap={5}>
      <h1 className="h1-bold">Product not found</h1>
      <Button asChild variant={"outline"}>
        <Link href="/store/products">Go back</Link>
      </Button>
    </Stack>
  );
};

export default error;
