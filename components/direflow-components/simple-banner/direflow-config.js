module.exports = {
  direflowMetadata: {
    title: 'simple-banner',
    description: 'This project is created using Direflow',
    type: 'direflow-component',
    createVersion: '1.0.16',
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['PT Sans', 'Noto Sans JP'],
        },
      },
    },
  ],
};
