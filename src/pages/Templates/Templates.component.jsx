import React, { Component } from 'react'
import TemplateBasic from '../../component/Template/Template-Basic/TemplateBasic.component';
import TemplateSimple from '../../component/Template/Template-Simple/TemplateSimple.component';



class Templates extends Component{

    constructor(){
        super();
        this.state = {
            contactDetails : {
                fullname: 'Ranjan Paul',
                email: 'ranjan.paul@gmail.com',
                bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum illo vero. Consequatur dolorum autem quam labore',
                phone: '00231596+',
                jobTitle: 'Frontend Developer',
                street: 'Jamtara',
                state: 'Jharkhand',
                country: 'India',
                pin: '815351'
            },
            educationDetails: [
                {
                    collegeName: "Giet",
                    degree: "BTech",
                    cgpa: "8.35",
                    collegeCity: "Gunupur",
                    graduationMonth: "June",
                    graduationYear: "2021"
                },
                {
                    collegeName: "Giet",
                    degree: "BTech",
                    cgpa: "8.35",
                    collegeCity: "Gunupur",
                    graduationMonth: "June",
                    graduationYear: "2021"
                },
                {
                    collegeName: "dav",
                    degree: "BTech",
                    cgpa: "8.35",
                    collegeCity: "Gunupur",
                    graduationMonth: "June",
                    graduationYear: "2021"
                }
            ],
            experienceDetails: [
                {
                    companyName: "Wipro",
                    duration: "2 Years",
                    position: "ABC",
                    description: "ABVD"
                },
                {
                    companyName: "Wipro",
                    duration: "2 Years",
                    position: "ABC",
                    description: "ABVD"
                }
            ],
            projectDetails: [
                {
                    projectName: "Resume Builder",
                    techStack : ['html', 'css', 'react js'],
                    summary:"build project",
                    projectLink: "resume-builder.live"
                },
                {
                    projectName: "Resume Builder",
                    techStack : ['html', 'css', 'react js'],
                    summary:"build project",
                    projectLink: "resume-builder.live"
                }
            ],
            skills: ['vscode', 'test1', 'test2','vscode', 'test1test1test1', 'test2','vscode', 'test1', 'test2'],
            hobbies:['cooking', 'playing'],
            profileLinks: {
                linkedIn: "linked.....",
                github: "github.......",
                website: "website......"
            },
            languages : ['Bengali', 'English', 'Hindi']
        }
    }

    render(){
        return (
            <div className="templates__container">
                <h1>Resume</h1>
                <TemplateBasic {...this.state}/>
                {/* <TemplateSimple {...this.state}/> */}

                
            </div>
        );
    }
}

export default Templates;