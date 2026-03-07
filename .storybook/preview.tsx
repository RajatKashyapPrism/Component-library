import React from 'react';
import "../src/global.css";
import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  globalTypes: {
    brand: {
      description: 'Brand',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'oyo', title: 'OYO' },
          { value: 'belvilla', title: 'Belvilla' },
          { value: 'dancenter', title: 'Dancenter' },
          { value: 'motel-6', title: 'Motel 6' },
          { value: 'checkin', title: 'CheckIn' },
          { value: 'studio-6', title: 'Studio 6' },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    density: {
      description: 'Density',
      toolbar: {
        title: 'Density',
        icon: 'component',
        items: [
          { value: 'comfortable', title: 'Comfortable' },
          { value: 'dense', title: 'Dense' },
          { value: 'tight', title: 'Tight' },
        ],
        dynamicTitle: true,
      },
    },
    platform: {
      description: 'Platform',
      toolbar: {
        title: 'Platform',
        icon: 'mobile',
        items: [
          { value: 'desktop', title: 'Desktop' },
          { value: 'mobile', title: 'Mobile' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    brand: 'oyo',
    theme: 'light',
    density: 'comfortable',
    platform: 'desktop',
  },
  decorators: [
    (Story, context) => {
      const { brand, theme, density, platform } = context.globals as {
        brand: string;
        theme: string;
        density: string;
        platform: string;
      };
      return (
        <div
          data-brand={brand}
          data-theme={theme === 'dark' ? 'dark' : undefined}
          data-density={density}
          data-platform={platform}
          style={{
            minHeight: '100vh',
            backgroundColor: 'var(--screen-colour-default, #fff)',
            padding: '1rem',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
