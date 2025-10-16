import { describe, it, expect } from "vitest";
import { music } from "./music";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(music.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'rap'", () => {
    expect(music).toContain("Rap");
  });
});