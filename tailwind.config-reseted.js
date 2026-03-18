/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Principais
        primaryLight: '#b99269',
        primaryDark: '#785E43',
        secondary: '#e9e4e0',
        terciary: '#f7f3f1',
        quartenary: '#fcfbfa',
        borderImage: '#292929',

        // Copys
        corTitulosBranca: '#FFFFFF',
        corOutrosTextosBranca: '#FFFFFF99',
        corTitulosPreto: ' #000000',
        corOutrosTextosPreto: '#666666',

        // hex botãoColor wpp
        wppLight: '#075e54',
        wppDark: '#25d366',

        // Minitags
        bgIcons: '#E0E2E9',
        bgFaixaHero: '#F1F3F7',
        textPadrao: '#1C312B',
        fontLighterFooter: '#E2E8E6',
        dark: '#0C0C0D',
        darkOpacity: '#111112',

        // classes template Novo
        mutedForeground: '#5B706A',
        accent: '#C44536',
        foreground: '#1B302B',
        border: '#E2E8E6',

        // Fundos de Seção
        bgSectionLight: '#FFFFFF',
        bgSectionDark: '#132745',
        bgSectionOpacityLight: '#F7F7F7',
        bgFixedLight: '#E8E8E8',
        bgSectionOpacityDark: '#111111',
        bgFixedDark: '#181818',
        quinary: '#F6F6F6 ',

        // Degradê da Lpv
        lpvHeroGradientTop: '#000',
        lpvHeroGradientBot: '#000',

        // Botões e Links
        links: '#0189BB',
        iconButtons: '#000',
        labelButtons: '#000',
        minititleLightLabel: '#000', //label das minitag de seções claras
        minititleDarkLabel: '#000', //label minitag de seções escuras

        // Sombras
        shadowHero: '#000000',
        shadowFeatures: '#000000',
        shadowAbouts: '#000000',
        shadowSteps: '#000000',
        shadowMaps: '#000000',
        shadowBlogs: '#000000',

        // Outros
        lighter: '#FFFFFF',
        darker: '#000000',
      },
      boxShadow: {
        'custom-opacity': '-20px 20px 0px', // 30% de opacidade
        'custom-opacityButton': '-5px 5px 0px', // 30% de opacidade no Botão
      },
      fontFamily: {
        mainFont: ['Playfair Display', 'serif'],
        Playfair: ['Playfair', 'serif'],
        // mainFont: ["Poppins", "sans-serif"],
        secondFont: ['Inter', 'sans-serif'],
        league: ['League Gothic'],
        barlow: ['Barlow Condensed'],
      },
      fontSize: {
        paragraph1: '0.625rem',
        paragraph2: '0.75rem',
        paragraph3: '0.875rem',
        paragraph4: '1rem',
        paragraph5: '1.125rem',
        title1: '1.25rem',
        title2: '1.375rem',
        title3: '1.5rem',
        title4: '1.875rem',
        title5: '2.25rem',
        title6: '3rem',
        title7: '3.5rem', // 55px
      },
      spacing: {
        112: '28rem',
        120: '30rem',
        128: '32rem',
      },
      screens: {
        phone1: '320px',
        phone2: '375px',
        phone3: '425px',
        tablet1: '640px',
        tablet2: '768px',
        desktop1: '1024px',
        desktop2: '1280px',
        desktop3: '1440px',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-5%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0%)', opacity: '1' },
          '100%': { transform: 'translateY(-5%)', opacity: '0' },
        },
        shineLoop: {
          '0%': {
            transform: 'translateX(-100%) skewX(-20deg)',
          },
          '20%': {
            transform: 'translateX(200%) skewX(-20deg)',
          },
          '100%': {
            transform: 'translateX(200%) skewX(-20deg)',
          },
        },

        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      animation: {
        'slide-down': 'slideDown 1s ease',
        'slide-up': 'slideUp 1s ease',
        'shine-loop': 'shineLoop 5s ease-in-out infinite',

        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
      },
    },
  },
}
// export const plugins = [require("tailwindcss-gradients")];
