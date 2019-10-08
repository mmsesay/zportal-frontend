// import {indexJobs} from '../api_connections/CustomFunctions'
import axios from 'axios';

var data = []
var ar = []
var jobTitle = ''
// // making the get request to the server
axios
  .get('http://localhost:5000/portal/jobs')
  .then(res => {
    data = res.data.jobs
    console.log(data)
    data.forEach(jb => {
      // ar.push(jb);
      // console.log(jb.jobTitle);
      // // id:  jb.id,
      jobTitle = jb.jobTitle;

      console.log(jobTitle);
      // job: jb.jobTitle
      // companyName: jb.organization_id,
      // companyDescription:'i like coding',
      // contractDuration: ` ${0%2?'Full Time':'Per Time'}`,
      // startingDate: jb.pubDate,
      // closingDate: jb.closingDate,
      // salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
      // jobDutyAndRresponsibility:  jb.jobDutyAndRresponsibility,
      // requireQualification:`${0%3?'Degree':'Master'}`,
      // additionalInformation:`${0%5?'we come ':'at your time'}`,
      // email:`${0%2?'munu@gmail.com':'amadu@gmail.com'}`,
      // Location:'kono',
      // shower:'show'
    });
  })
  .catch(err => {
      console.log(err);
      alert(err); //See this error
  });


// const obj =
// [
//     {
//       id:0,
//       jobTitle: ` ${0}`,
//       companyName:`Developers group`,
//       companyDescription:'i like coding',
//       contractDuration: `${0%2?'Full Time':'Per Time'}`,
//       startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
//       closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
//       salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
//       jobDutyAndRresponsibility:'we care for you',
//       requireQualification:`${0%3?'Degree':'Master'}`,
//       additionalInformation:`${0%5?'we come ':'at your time'}`,
//       email:`${0%2?'munu@gmail.com':'amadu@gmail.com'}`,
//       Location:'kono',
//       shower:'show'
//     }
// ]
// export default obj

const obj = [
  {
    id:0,
    jobTitle:`Portal ${0}`,
    companyName:`Developers group`,
    companyDescription:'i like coding',
    contractDuration: `${0%2?'Full Time':'Per Time'}`,
    startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
    closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
    salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
    jobDutyAndRresponsibility:'we care for you',
    requireQualification:`${0%3?'Degree':'Master'}`,
    additionalInformation:`${0%5?'we come ':'at your time'}`,
    email:`${0%2?'munu@gmail.com':'amadu@gmail.com'}`,
    Location:'kono',
    shower:'show'
  },
    {
      id:0,
      jobTitle:`Portal ${0}`,
      companyName:`Developers group`,
      companyDescription:'i like coding',
      contractDuration: `${0%2?'Full Time':'Per Time'}`,
      startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
      closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
      salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
      jobDutyAndRresponsibility:'we care for you',
      requireQualification:`${0%3?'Degree':'Master'}`,
      additionalInformation:`${0%5?'we come ':'at your time'}`,
      email:`${0%2?'munu@gmail.com':'amadu@gmail.com'}`,
      Location:'kono',
      shower:'show'
    },
    {
      id:1,
      jobTitle:`Portal ${1}`,
      companyName:`Developers group ${1}`,
      companyDescription:'i like coding',
      contractDuration: `${1%2?'Full Time':'Per Time'}`,
      startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
      closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
      salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
      jobDutyAndRresponsibility:'we care for you',
      requireQualification:`${1%3?'Degree':'Master'}`,
      additionalInformation:`${1%5?'we come ':'at your time'}`,
      email:`${1%2?'munu@gmail.com':'amadu@gmail.com'}`,
      location:'kono',
      shower:''
      },{id:2,
        jobTitle:`Portal ${2}`,
        companyName:`Developers group ${2}`,
        
      companyDescription:'i like coding',
      contractDuration: `${2%2?'Full Time':'Per Time'}`,
           startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
       closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
       salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
       jobDutyAndRresponsibility:'we care for you',
       requireQualification:`${2%3?'Degree':'Master'}`,
       additionalInformation:`${2%5?'we come ':'at your time'}`,
       email:`${2%2?'munu@gmail.com':'amadu@gmail.com'}`,
         Location:'kono',
        shower:''
        },{id:3,
          jobTitle:`Portal ${3}`,
          companyName:`Developers group ${3}`,
          
        companyDescription:'i like coding',
        contractDuration: `${3%2?'Full Time':'Per Time'}`,
             startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
         closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
         salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
         jobDutyAndRresponsibility:'we care for you',
         requireQualification:`${3%3?'Degree':'Master'}`,
         additionalInformation:`${3%5?'we come ':'at your time'}`,
         email:`${3%2?'munu@gmail.com':'amadu@gmail.com'}`,
           Location:'kono',
          shower:''
        },
        {id:4,
          jobTitle:`Portal ${4}`,
          companyName:`Developers group ${4}`,
          
        companyDescription:'i like coding',
        contractDuration: `${4%2?'Full Time':'Per Time'}`,
             startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
         closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
         salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
         jobDutyAndRresponsibility:'we care for you',
         requireQualification:`${4%3?'Degree':'Master'}`,
         additionalInformation:`${4%5?'we come ':'at your time'}`,
         email:`${4%2?'munu@gmail.com':'amadu@gmail.com'}`,
           Location:'kono',
          shower:''
          },
          {id:5,
            jobTitle:`Portal ${5}`,
            companyName:`Developers group ${5}`,
            
          companyDescription:'i like coding',
          contractDuration: `${5%2?'Full Time':'Per Time'}`,
               startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
           closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
           salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
           jobDutyAndRresponsibility:'we care for you',
           requireQualification:`${5%3?'Degree':'Master'}`,
           additionalInformation:`${5%5?'we come ':'at your time'}`,
           email:`${5%2?'munu@gmail.com':'amadu@gmail.com'}`,
             Location:'kono',
            shower:''
            },
            {id:6,
              jobTitle:`Portal ${6}`,
              companyName:`Developers group ${6}`,
              
            companyDescription:'i like coding',
            contractDuration: `${6%2?'Full Time':'Per Time'}`,
                 startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
             closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
             salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
             jobDutyAndRresponsibility:'we care for you',
             requireQualification:`${6%3?'Degree':'Master'}`,
             additionalInformation:`${6%5?'we come ':'at your time'}`,
             email:`${6%2?'munu@gmail.com':'amadu@gmail.com'}`,
               Location:'kono',
              shower:''
            },
            {id:7,
              jobTitle:`Portal ${7}`,
              companyName:`Developers group ${7}`,
              
            companyDescription:'i like coding',
            contractDuration: `${7%2?'Full Time':'Per Time'}`,
                 startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
             closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
             salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
             jobDutyAndRresponsibility:'we care for you',
             requireQualification:`${7%3?'Degree':'Master'}`,
             additionalInformation:`${7%5?'we come ':'at your time'}`,
             email:`${7%2?'munu@gmail.com':'amadu@gmail.com'}`,
               Location:'kono',
              shower:''
              },
              {id:8,
                jobTitle:`Portal ${8}`,
                companyName:`Developers group ${8}`,
                
              companyDescription:'i like coding',
              contractDuration: `${8%2?'Full Time':'Per Time'}`,
                   startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
               closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
               salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
               jobDutyAndRresponsibility:'we care for you',
               requireQualification:`${8%3?'Degree':'Master'}`,
               additionalInformation:`${8%5?'we come ':'at your time'}`,
               email:`${8%2?'munu@gmail.com':'amadu@gmail.com'}`,
                 Location:'kono',
                shower:''
                },
                {id:9,
                  jobTitle:`Portal ${9}`,
                  companyName:`Developers group ${9}`,
                  
                companyDescription:'i like coding',
                contractDuration: `${9%2?'Full Time':'Per Time'}`,
                     startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                 closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                 salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
                 jobDutyAndRresponsibility:'we care for you',
                 requireQualification:`${9%3?'Degree':'Master'}`,
                 additionalInformation:`${9%5?'we come ':'at your time'}`,
                 email:`${9%2?'munu@gmail.com':'amadu@gmail.com'}`,
                   Location:'kono',
                  shower:''
                  },
                  {id:10,
                    jobTitle:`Portal ${10}`,
                    companyName:`Developers group ${10}`,
                    
                  companyDescription:'i like coding',
                  contractDuration: `${10%2?'Full Time':'Per Time'}`,
                       startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                   closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                   salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
                   jobDutyAndRresponsibility:'we care for you',
                   requireQualification:`${10%3?'Degree':'Master'}`,
                   additionalInformation:`${10%5?'we come ':'at your time'}`,
                   email:`${10%2?'munu@gmail.com':'amadu@gmail.com'}`,
                     Location:'kono',
                    shower:''
                    },
                    {id:11,
                      jobTitle:`Portal ${11}`,
                      companyName:`Developers group ${11}`,
                      
                    companyDescription:'i like coding',
                    contractDuration: `${11%2?'Full Time':'Per Time'}`,
                         startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                     closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                     salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
                     jobDutyAndRresponsibility:'we care for you',
                     requireQualification:`${11%3?'Degree':'Master'}`,
                     additionalInformation:`${11%5?'we come ':'at your time'}`,
                     email:`${11%2?'munu@gmail.com':'amadu@gmail.com'}`,
                       Location:'kono',
                      shower:''
                      },
                    {id:12,
                      jobTitle:`Portal ${12}`,
                      companyName:`Developers group ${12}`,
                      
                    companyDescription:'i like coding',
                    contractDuration: `${12%2?'Full Time':'Per Time'}`,
                         startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                     closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                     salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
                     jobDutyAndRresponsibility:'we care for you',
                     requireQualification:`${12%3?'Degree':'Master'}`,
                     additionalInformation:`${12%5?'we come ':'at your time'}`,
                     email:`${12%2?'munu@gmail.com':'amadu@gmail.com'}`,
                       Location:'kono',
                      shower:''
                      },
                      {id:13,
                        jobTitle:`Portal ${13}`,
                        companyName:`Developers group ${13}`,
                        
                      companyDescription:'i like coding',
                      contractDuration: `${13%2?'Full Time':'Per Time'}`,
                           startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                       closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                       salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
                       jobDutyAndRresponsibility:'we care for you',
                       requireQualification:`${13%3?'Degree':'Master'}`,
                       additionalInformation:`${13%5?'we come ':'at your time'}`,
                       email:`${13%2?'munu@gmail.com':'amadu@gmail.com'}`,
                         Location:'kono',
                        shower:''
                        },
                        {id:14,
                          jobTitle:`Portal ${14}`,
                          companyName:`Developers group ${14}`,
                          
                        companyDescription:'i like coding',
                        contractDuration: `${14%2?'Full Time':'Per Time'}`,
                             startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                         closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                         salaryFrom:`${Math.ceil(Math.random()*140000000)+1}`, salaryTo:`${Math.ceil(Math.random()*140000000)+1}`,
                         jobDutyAndRresponsibility:'we care for you',
                         requireQualification:`${14%3?'Degree':'Master'}`,
                         additionalInformation:`${14%5?'we come ':'at your time'}`,
                         email:`${14%2?'munu@gmail.com':'amadu@gmail.com'}`,
                           Location:'kono',
                          shower:''
                          },
                          {id:15,
                            jobTitle:`Portal ${15}`,
                            companyName:`Developers group ${15}`,
                            
                          companyDescription:'i like coding',
                          contractDuration: `${15%2?'Full Time':'Per Time'}`,
                               startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                           closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                           salaryFrom:`${Math.ceil(Math.random()*150000000)+1}`, salaryTo:`${Math.ceil(Math.random()*150000000)+1}`,
                           jobDutyAndRresponsibility:'we care for you',
                           requireQualification:`${15%3?'Degree':'Master'}`,
                           additionalInformation:`${15%5?'we come ':'at your time'}`,
                           email:`${15%2?'munu@gmail.com':'amadu@gmail.com'}`,
                             Location:'kono',
                            shower:''
                            },
                            {id:16,
                              jobTitle:`Portal ${16}`,
                              companyName:`Developers group ${16}`,
                              
                            companyDescription:'i like coding',
                            contractDuration: `${16%2?'Full Time':'Per Time'}`,
                                 startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                             closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                             salaryFrom:`${Math.ceil(Math.random()*160000000)+1}`, salaryTo:`${Math.ceil(Math.random()*160000000)+1}`,
                             jobDutyAndRresponsibility:'we care for you',
                             requireQualification:`${16%3?'Degree':'Master'}`,
                             additionalInformation:`${16%5?'we come ':'at your time'}`,
                             email:`${16%2?'munu@gmail.com':'amadu@gmail.com'}`,
                               Location:'kono',
                              shower:''
                              },
                              {id:17,
                                jobTitle:`Portal ${17}`,
                                companyName:`Developers group ${17}`,
                                
                              companyDescription:'i like coding',
                              contractDuration: `${17%2?'Full Time':'Per Time'}`,
                                   startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                               closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                               salaryFrom:`${Math.ceil(Math.random()*170000000)+1}`, salaryTo:`${Math.ceil(Math.random()*170000000)+1}`,
                               jobDutyAndRresponsibility:'we care for you',
                               requireQualification:`${17%3?'Degree':'Master'}`,
                               additionalInformation:`${17%5?'we come ':'at your time'}`,
                               email:`${17%2?'munu@gmail.com':'amadu@gmail.com'}`,
                                 Location:'kono',
                                shower:''
                                },
                                {id:18,
                                  jobTitle:`Portal ${18}`,
                                  companyName:`Developers group ${18}`,
                                  
                                companyDescription:'i like coding',
                                contractDuration: `${18%2?'Full Time':'Per Time'}`,
                                     startingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                                 closingDate:`${Math.ceil(Math.random()*11)+1}/${Math.ceil(Math.random()*30)+1}/2019`,
                                 salaryFrom:`${Math.ceil(Math.random()*180000000)+1}`, salaryTo:`${Math.ceil(Math.random()*180000000)+1}`,
                                 jobDutyAndRresponsibility:'we care for you',
                                 requireQualification:`${18%3?'Degree':'Master'}`,
                                 additionalInformation:`${18%5?'we come ':'at your time'}`,
                                 email:`${18%2?'munu@gmail.com':'amadu@gmail.com'}`,
                                   Location:'kono',
                                  shower:''
                                  }
                                    
                      ]
                        export default obj
    

   
 


