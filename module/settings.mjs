/**
 * Register all of the system's settings
 */
export function registerSystemSettings() {
  // Use ascending Armor Class
  game.settings.register("swords-wizardry", "useAscendingAC", {
    name: "Use ascending AC",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  // Include thief-like class skils from Swords & Wizardry: Options
  game.settings.register("swords-wizardry", "includeOptionalSkills", {
    name: "Include class skills from Swords & Wizardry: Options",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });
}
