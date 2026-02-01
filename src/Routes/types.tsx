import React from "react";

export interface AppRoute {
  path: string;
  element: React.ReactNode;
  layout?: React.ComponentType;
  roles?: string[]; // optional
}
