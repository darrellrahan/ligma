const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.darrellrahan.ligma.dev";
  }

  if (IS_PREVIEW) {
    return "com.darrellrahan.ligma.preview";
  }

  return "com.darrellrahan.ligma";
};

const getAppName = () => {
  if (IS_DEV) {
    return "Ligma (Dev)";
  }

  if (IS_PREVIEW) {
    return "Ligma (Preview)";
  }

  return "Ligma: Ligma What?";
};

export default {
  name: getAppName(),
  slug: "ligma",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/adaptive-icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#EEEEEE",
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#EEEEEE",
    },
    package: getUniqueIdentifier(),
    versionCode: "1",
  },
  web: {
    favicon: "./assets/adaptive-icon.png",
  },
  extra: {
    eas: {
      projectId: "a2609e53-a129-495a-8bf1-d7983004e721",
    },
  },
  owner: "darrellrahan",
};
