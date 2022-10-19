
export default function HTMLPage(props) {

  const title=reportData?.header?.title || "报告"
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        <style jsx>{`
          table {
            border: 1px solid black;
            border-collapse: collapse;
            width: 100%;
            font-size: 12px;
            padding: 5px;
          }
          th {
            border: 1px solid black;
            border-collapse: collapse;
            font-size: 12px;
            padding: 5px;
            text-align: center;
            background-color: lightgray;
          }
          td {
            border: 1px solid black;
            border-collapse: collapse;
            font-size: 10px;
            padding-left: 5px;
          }

          /**/
          .table,
          .tbody {
            all: unset;
            border: 1px solid black;

            width: 100%;
          }

          .tr {
            all: unset;

            width: 25%;
          }

          .td {
            border: 1px solid red;
            border: initial;
            all: unset;
            text-align: justify;

            outline: none;
            font-size: 10px;
            padding: 5px;
            background-color: darkblue;
            word-break: break-all;
          }
          .th {
            width: "80px";
            background-color: lightgray;

            font-size: 10px;
            font-family: "Gill Sans Extrabold", sans-serif;
            padding: 5px;
            text-align: left;
            word-break: break-all;
          }

          .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
          }

          .column {
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            flex: 1;
          }
          .footer {
            height: 20px;
            margin-top: -30px;
          }
        `}</style>
      </head>
      <body>{props.children}</body>
    </html>
  );
}
