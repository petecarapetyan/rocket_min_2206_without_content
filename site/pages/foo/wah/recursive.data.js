import { html } from 'lit';

export { html };

export const layout = data => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Rackets</title>
    </head>
    <body>
      ${data.content()}
      <div>basking in the glow</div>
    </body>
  </html>
`;

