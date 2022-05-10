//own-domain/[meetupId]
import { MongoClient ,ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from 'next/head'
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails(props){ 
    return( 
      <Fragment> 
        <Head>
           <title>{props.meetupData.title}</title>
           <meta name='description' content={props.meetupData.description}></meta>
        </Head>
        <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address= {props.meetupData.address}
      description={props.meetupData.description}
      />
      </Fragment>
     
    )
}

export async function getStaticPaths (){ 
  const client= await  MongoClient.connect('mongodb+srv://saiken:lvOJWcSrCerwOXCo@cluster0.2fgwr.mongodb.net/Meetup?retryWrites=true&w=majority');
  const db=client.db(); 

  const meetupsCollection=db.collection('meetups') 
  
  const meetups= await meetupsCollection.find({},{_id:1}).toArray(); 
  client.close() 
  return { 
    fallback:false, // allows to pre-generate pages .
    paths: meetups.map(meetup=>({
      params:{meetupId:meetup._id.toString()},
    }))
    
  }
} 
export async function getStaticProps(context){ 
  //fetch data for a single meetup 
 const meetupId=context.params.meetupId;// you can access the meetupId use context.params  

 console.log(meetupId); 
 const client= await  MongoClient.connect('mongodb+srv://saiken:lvOJWcSrCerwOXCo@cluster0.2fgwr.mongodb.net/Meetup?retryWrites=true&w=majority');
  const db=client.db(); 

  const meetupsCollection=db.collection('meetups') 
  
  const selectedMeetup= await meetupsCollection.findOne({_id:ObjectId(meetupId)}) //finds one selected meetup  
  
  client.close()
 
  return { 
    props:{ 
     meetupData:{
       id:selectedMeetup._id.toString(),  // convert this to a string 
       title:selectedMeetup.title, 
       address: selectedMeetup.address, 
       image:selectedMeetup.image,
       description:selectedMeetup.description 
     }
    },
  };
}
export default MeetupDetails; 

