import type { NextPage } from 'next';
import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';

const Home: NextPage = () => {
  const intl = useIntl();
  return (
    <div>
      <Head>
        <title>{intl.formatMessage({ defaultMessage: 'Your zero waste same-day delivery.' })}</title>
      </Head>
      <h1>
        <FormattedMessage defaultMessage="Your zero waste same-day delivery." />
      </h1>
      <h2>
        <FormattedMessage defaultMessage="Everything for your sustainable everyday life: high-quality organic foods, household goods and cosmetics – all without single use plastics." />
      </h2>
      <button>
        <FormattedMessage defaultMessage="Shop now" />
      </button>
      <div>
        <h3>
          <FormattedMessage defaultMessage="We are live in Berlin and Munich." />
        </h3>
      </div>
      <div>
        <h3>
          <FormattedMessage defaultMessage="Make a wish" />
        </h3>
        <p>
          <FormattedMessage defaultMessage="We don't deliver to you yet? Register here and we will inform you as soon as we have extended our delivery area to your desired place." />
        </p>
      </div>
    </div>
  );
};

export default Home;
