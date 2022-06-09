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
    <body style="background-color: #ffff00; border-width:1px; border-style: solid; border-color: #000000; height: 500px">
      ${data.content()}
    </body>
  </html>
`;
