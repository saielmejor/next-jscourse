// our-domain.com/new-meetup 
import router, {useRouter} from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'; 
import Head from 'next/head'
import {Fragment} from 'react';

function NewMeetupPage(){ 
    useRouter
    //add  data to mongodb 
  async  function AddMeetupHandler(enteredData){
        console.log(enteredData); 
    const response=await fetch('/api/new-meetup',{ 
        method:'POST',
        body:JSON.stringify(enteredData), 
        headers:{ 
            'Content-Type': 'application/json'
        
        }
    }); 
    const data=await response.json(); 
    console.log(data);
    router.push('/');
    }
    return(
        <Fragment>
      <Head>
        <title> Add New Meetup</title>
        <meta name='description' content='Add new Meetup '></meta>
      </Head>
      <NewMeetupForm onAddMeetup={AddMeetupHandler}/> 
    </Fragment>
    ) 
    

}

export default NewMeetupPage