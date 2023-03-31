import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  /**
   *  Using a key of "session" in the props object sends an empty object
   *  to the component.  Comment out the return statement below, and run
   *  the application.  Replace the "session"  key with "dataSession" and
   *  the props are displayed in the component correctly
   */
  return {
    props: {
      session: {
        user: "Hello",
      },
    },
  };
  // return {
  //   props: {
  //     dataSession: {
  //       user: "Hello",
  //     },
  //   },
  // };
};
