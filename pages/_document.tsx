import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-teal-50 py-4 px-6 m-auto max-w-8xl">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
