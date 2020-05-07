import colors from "vuetify/lib/util/colors";

export default {
  /**
   * @see https://vuetifyjs.com/en/customization/breakpoints
   */
  breakpoint: {},
  /**
   * @see https://vuetifyjs.com/en/customization/icons
   */
  icons: {
    iconFont: "mdi",
  },
  /**
   * @see https://vuetifyjs.com/en/customization/internationalization
   */
  lang: {},
  /**
   * @see https://vuetifyjs.com/en/customization/rtl
   */
  rtl: false,
  /**
   * @see https://vuetifyjs.com/en/customization/theme
   */
  theme: {
    disable: false,
    dark: true,
    themes: {
      // light: {},
      dark: {
        primary: colors.deepPurple.base,
      },
    },
    options: {
      customProperties: true,
    },
  },
};
