import React from 'react';

class Detail extends React.Component {
    componentDidMount(){ 
        console.log(this.props);
        const { location , history } = this.props; 
        if(location.state === undefined ){
            history.push("/");
        }
    }
    render() {       
        const { location } = this.props;
        if(location.state){
            return <div>
                <h1>{location.state.title}</h1>
                <h2>{location.state.summary}</h2>
            </div>
        }else{
            return null;
        }
    }
}

export default Detail;