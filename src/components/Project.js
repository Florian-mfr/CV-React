import React, { Component } from 'react';

class Project extends Component {
    render() {
        let { name, languagesIcons, source, languages, info, picture } = this.props.item

        return (
            <div className='project-card'>
                <div className='div-img'>
                    <img src={picture} alt='project picture' className='img'/>
                </div>
                <div className='div-info'>
                    <div className='head'>
                        <h3>
                            {name}
                        </h3>
                        <div className='icon'>
                            {languagesIcons.map(icon => 
                                <i className={icon} key={icon}></i>
                            )}
                        </div>
                    </div>
                    <p>
                        {info}
                    </p>
                    <a href={source}>
                        <button>Code source</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Project;