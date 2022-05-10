import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

// // const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: " A first Meetup",
//     image:
//       "https://www.fcbarcelona.com/photo-resources/2022/05/04/ef85145d-c714-468f-a6ae-814b676805fd/3200x2000-noticia-horaris-memphis-betis-EN.jpg?width=1200&height=750",
//     address: " Somecity in some state Barcelona ",
//     description: " This is our first visit",
//   },

//   {
//     id: "m2",
//     title: " A second Meetup",
//     image:
//       "https://www.fcbarcelona.com/photo-resources/2022/05/04/ef85145d-c714-468f-a6ae-814b676805fd/3200x2000-noticia-horaris-memphis-betis-EN.jpg?width=1200&height=750",
//     address: " Somecity in some state Barcelona ",
//     description: " This is our second visit",
//   },
// ];
// //pass down props argument
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title> React Meetups</title>
        <meta name='description' content='Browse a huge list of highly active React Meetups '></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  ); // import component MeetupList and pass DUMYMY Meetyupos
}

// export async function getServerSideProps(context){
//   const req=context.req;
//   const res=context.res;

//   // will run on the server on every incomking request

//   return {
//     props:{
//       meetups:DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // const data=req.body; // obtain data from request bodyu
  const client = await MongoClient.connect(
    "mongodb+srv://saiken:lvOJWcSrCerwOXCo@cluster0.2fgwr.mongodb.net/Meetup?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray(); // find documents and convert it to an array

  client.close();
  //fetch data from an API
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, // regenerates the page every couple of seconds on the server
  };
} // calls this function before the component and is executed in the server
export default HomePage;
