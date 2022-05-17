import React from "react";
import { getSession, signIn, useSession } from "next-auth/client";
import { useEffect } from "react";
import { authenticate } from "store/actions/auth";
import { wrapper } from "store/store";
import { connect } from "react-redux";

const InitialPage = () => {
  const [session] = useSession();

  useEffect(() => {
    signIn();
  }, [session]);

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const sessionData = await getSession(ctx);

    if (sessionData && sessionData.user) {
      store.dispatch(authenticate(sessionData.user.token));

      return {
        props: {
          sessionData: sessionData,
        },
        redirect: {
          destination: "/home",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  }
);

export default connect((state) => state)(InitialPage);
