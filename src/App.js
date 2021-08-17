import React, { Component,Fragment } from 'react'
import { Grid,Typography} from '@material-ui/core';
import Nav from './Components/Navigation/Nav';
import Cards from './Components/Cards/Cards';
import Save from './Components/Save/Save'



class App extends Component {
  state={
    profile:[
      {id:"20xc",Name:"Anney", desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, velit."}
    ],
    toggleValue: false,
    onUpdate:false,
    id : '',
    Name:'',
    desc:''
  }

  newPostHandler = () => {
    this.setState({toggleValue: true,id:'',desc:'',Name:'',onUpdate:false})
  }
  
  homeHandler=()=>{
    this.setState({toggleValue: false ,onUpdate:false})
  }

  onChangeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submitHandler=()=>{
    const{id,Name,desc}=this.state
    const copyProfile=[...this.state.profile]
    const cardIndex=this.state.profile.findIndex(c=> c.id===id)
    if(cardIndex===-1){
      if(id===''|| desc===''|| Name===''){
        alert("please fill all the input fields" )
      }
      else{

        copyProfile.push({id,Name,desc})
        this.setState({profile: copyProfile,toggleValue:false,Name:'',id:'',desc:''})
      }

    }
    else{
      copyProfile[cardIndex]={id,Name,desc}
      this.setState({profile:copyProfile,onUpdate:false})
      // console.log(this.state)
    }
    
  }

  deleteHandler=(elem)=>{
    const filterProfile = this.state.profile.filter(c => c.id !== elem.id)
    this.setState({profile: filterProfile})

  }

  updateHandler=(elem)=>{
    this.setState({Name:elem.Name,desc:elem.desc, id:elem.id,onUpdate:true})
  }

  render() {
    const card=this.state.profile.map((elem,index)=>{
      return <Cards
        key={elem.id} 
        name={elem.Name}
        desc={elem.desc}
        delete={()=>this.deleteHandler(elem)}
        update={() => this.updateHandler(elem)}
      />
    })

    let save=(<Save
      submitHandler={this.submitHandler}
      change={this.onChangeHandler}
      home={()=>this.homeHandler()}
      Name={this.state.Name}
      desc={this.state.desc}
      id={this.state.id}
      update={this.state.onUpdate}
    />)

     
    return (
      <>
        <Nav newPost={()=>this.newPostHandler()} />
        <Grid container>
          <Grid sm={2} item></Grid>
          <Grid  sm={8} item>
            {(this.state.toggleValue || this.state.onUpdate)? save : card}
          </Grid>
          <Grid sm={2} item></Grid>
        </Grid>
        <Typography align='center' style={{marginTop: '2rem'}}>
          Made with <span style={{color:'red'}}>❤</span>,in Sheriyans Coding School.
        </Typography>
        
      </>
    )
  }
}

export default App

