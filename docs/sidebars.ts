import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Primeros Pasos',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/vite',
        'getting-started/nextJS',
        'getting-started/astro',
        'getting-started/remix',
      ],
    },
    {
      type: 'category',
      label: 'Componentes',
      collapsed: false,
      items: [
        'components/avatar',
        'components/badge',
        'components/button',
        'components/checkbox',
        'components/divider',
        'components/input',
        'components/label',
        'components/radio',
        'components/select',
        'components/slider',
        'components/switch',
        'components/tag',
        'components/tooltip',
        'components/typography',
      ],
    },
  ],
};

export default sidebars;
