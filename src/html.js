import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes} lang="en-us">
        <head>
          <title>GraphQL Asia 2021</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta title="Graphql Asia 2021" />
          <meta name="title" content="GraphQL Asia 2021" />
          <meta
            name="description"
            content="GraphQL Asia is the largest gathering of the GraphQL community in Asia! With over 500 people expected at the 2021 edition, you’ll meet the creators of leading GraphQL tooling, talk to the experts implementing GraphQL in their companies as well as practitioners and enthusiasts from Asia and the rest of the world."
          />
          <meta property="og:title" content="Graphql Asia 2021" />
          <meta
            property="og:description"
            content="GraphQL Asia is the largest gathering of the GraphQL community in Asia! With over 500 people expected at the 2021 edition, you’ll meet the creators of leading GraphQL tooling, talk to the experts implementing GraphQL in their companies as well as practitioners and enthusiasts from Asia and the rest of the world."
          />
          <meta property="og:image" content="https://graphql.asia/graphql-asia.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Graphql Asia 2021" />
          <meta
            property="twitter:description"
            content="GraphQL Asia is the largest gathering of the GraphQL community in Asia! With over 500 people expected at the 2021 edition, you’ll meet the creators of leading GraphQL tooling, talk to the experts implementing GraphQL in their companies as well as practitioners and enthusiasts from Asia and the rest of the world."
          />
          <meta property="twitter:image" content="https://graphql.asia/graphql-asia.png" />

          {this.props.headComponents}
          <link rel="shortcut icon" href="./images/favicon.png" type="image/png" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossOrigin="anonymous"
          />
          <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossOrigin="anonymous"
          />
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossOrigin="anonymous"
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            $(document).on('click','.navbar-collapse.in',function(e) {
              if( $(e.target).is('button') ) {
                $(this).collapse('hide');
              }
            });
            `,
            }}
          />
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
