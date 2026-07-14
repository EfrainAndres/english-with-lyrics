export type RuntimeEnvironment = "development" | "preview" | "production";

export function getRuntimeEnvironment(): RuntimeEnvironment {
  switch (process.env.VERCEL_ENV) {
    case "preview":
      return "preview";
    case "production":
      return "production";
    default:
      return "development";
  }
}
