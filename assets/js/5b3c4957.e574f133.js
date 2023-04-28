"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[113],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},304:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294);const i={anatomy:"How Lamby Works",cpu:"CPU Architecture",environment:"ENV Variables & Secrets",assets:"JavaScript & Assets",deploy:"Build & Deploy","custom-domain":"Custom Domain Names",activejob:"ActiveJob & Background Processing",observability:"Logging & Observability",database:"Database & VPCs",webservers:"Web Proxy Integrations"};function o(e){let{id:t,name:a,anchor:o}=e;const r=a||i[t]||t.replace(/(_|-)/g," ").split(" ").map((e=>e.charAt(0).toUpperCase()+e.toLowerCase().slice(1))).join(" ");return o?n.createElement("a",{href:`/docs/${t}#${o}`},r):n.createElement("a",{href:`/docs/${t}`},r)}},5874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(7462),i=(a(7294),a(3905)),o=a(304),r=a(941),l=a(4996);const s={id:"anatomy",title:"How Lamby Works",toc_max_heading_level:3},c="How Lamby Works",p={unversionedId:"anatomy",id:"anatomy",title:"How Lamby Works",description:"The quickest way to see Lamby in action is to create a new Rails app via our cookiecutter project template using our  guide. This guide will instead outline what is happening within that starter project allowing you to cherry-pick which files and/or practices from our cookiecutter project can be applied to your own application(s).",source:"@site/docs/anatomy.mdx",sourceDirName:".",slug:"/anatomy",permalink:"/docs/anatomy",draft:!1,editUrl:"https://github.com/rails-lambda/lamby-site/tree/master/docs/anatomy.mdx",tags:[],version:"current",frontMatter:{id:"anatomy",title:"How Lamby Works",toc_max_heading_level:3},sidebar:"docsSidebar",previous:{title:"Quick Start",permalink:"/docs/quick-start"},next:{title:"CPU Architecture",permalink:"/docs/cpu"}},m={},u=[{value:"Architecture",id:"architecture",level:2},{value:"Install Lamby",id:"install-lamby",level:2},{value:"Runtime Container",id:"runtime-container",level:2},{value:"SAM CloudFormation File",id:"sam-cloudformation-file",level:2},{value:"Development Container",id:"development-container",level:2},{value:"Deployment &amp; CI/CD",id:"deployment--cicd",level:2},{value:"CircleCI",id:"circleci",level:3},{value:"GitHub Actions",id:"github-actions",level:3}],d={toc:u};function h(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-lamby-works"},"How Lamby Works"),(0,i.kt)("p",null,"The quickest way to see Lamby in action is to create a new Rails app via our cookiecutter project template using our ",(0,i.kt)(o.Z,{id:"quick-start",mdxType:"DocLink"})," guide. This guide will instead outline what is happening within that starter project allowing you to cherry-pick which files and/or practices from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rails-lambdagithub.com/rails-lambda/lamby-cookiecutter"},"cookiecutter")," project can be applied to your own application(s)."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you copy any template files without using the cookiecutter, remember to customize the ",(0,i.kt)("inlineCode",{parentName:"p"},"{% include ... %}")," template sections with your own app name and remove the curly bracket sections like these ",(0,i.kt)("inlineCode",{parentName:"p"},'{{ "..." }}')," from various string literals.")),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Lamby is a Rack adapter that converts AWS Lambda integration events into native ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rack/rack/blob/master/SPEC.rdoc"},"Rack Environment")," objects which are sent directly to your application. Lamby can automatically do this when using either Lambda Function URLs, API Gateway HTTP API v1/v2 payloads, API Gateway REST API, or even Application Load Balancer (ALB) integrations."),(0,i.kt)("mermaid",{value:"%%{init:{'flowchart':{'nodeSpacing': 20, 'rankSpacing': 20}}}%%\nflowchart LR\n  %% Objects\n  src-furl(Lambda Function URLs)\n  src-apih(API Gateway HTTP API)\n  src-apir(API Gateway REST API)\n  src-alb(Application Load Balancer)\n  invoke[/invoke/]\n  lambda[Lambda Function]\n  subgraph container[\"Container Image\"]\n    direction LR\n    ric[RIC -> config/env.Lamby.cmd]:::rics\n    app[Event -> Rack -> Rails::App]:::pink\n    os[Operatring System & Packages]:::desc\n  end\n  %% Flow\n  src-furl --\x3e |Event| invoke\n  src-apih --\x3e |Event v1 or v2| invoke\n  src-apir --\x3e |Event| invoke\n  src-alb --\x3e |Event| invoke\n  invoke --\x3e lambda\n  lambda --\x3e ric\n  %% Styles\n  classDef node fill:#a99ff0,stroke:#fff,stroke-width:4px,color:#000;\n  classDef pink fill:#fe4f8b,stroke:#fff,stroke-width:4px,color:#fff;\n  classDef orange fill:#ed8235,stroke:#fff,stroke-width:4px,color:#fff;\n  classDef cont fill:#c6fffd,stroke:#70d6d2,stroke-width:4px,color:black,font-size:12px;\n  classDef rics fill:#a99ff0,stroke:#fff,stroke-width:4px,color:#000;\n  classDef desc fill:white,stroke:#ccc,stroke-width:2px,color:black;\n  %% ,font-size:12px\n  class src-apir,src-apih pink\n  class src-alb orange\n  class container cont\n  class ric rics"}),(0,i.kt)("p",null,"Since Rails applications are Rack applications, Lamby removes the need for a companion ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rack/rack#supported-web-servers"},"Rack Web Server")," like Passenger or Puma to be running within your container. Essentially AWS integrations become your web server and scaling is managed by the Lambda service spinning up new container instances, one for each request or down to zero if needed. Lambda instances live for several minutes or more. A small pool of concurrent fuctions can handle a large amount of traffic."),(0,i.kt)("h2",{id:"install-lamby"},"Install Lamby"),(0,i.kt)("p",null,"Start by adding the Lamby gem to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Gemfile"),". It remains inert until it detects special environment variables present when run on AWS Lambda. When activated, it mostly does a few simple things like ensuring Rails logs to standard out."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"gem 'lamby'\n")),(0,i.kt)("h2",{id:"runtime-container"},"Runtime Container"),(0,i.kt)("p",null,"You will need some ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rails-lambda/lamby-cookiecutter/blob/master/%7B%7Bcookiecutter.project_name%7D%7D/Dockerfile"},(0,i.kt)("inlineCode",{parentName:"a"},"Dockerfile"))," to build your Lambda container image. Referencing architecture diagram above mentions something called a RIC (Rick). The RIC is short for the Lambda ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aws/aws-lambda-ruby-runtime-interface-client"},"Runtime Interface Client"),". It is a small interface packaged as a Ruby gem that acts as the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," for any ",(0,i.kt)("a",{parentName:"p",href:"https://opencontainers.org"},"OCI")," continer image to run on the AWS Lambda platform. Below you can see that we are using an ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/ruby"},"Official Ruby")," Ubuntu variant base image, installing the RIC and setting it as the entrypoint."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM ruby:3.2-bullseye\n\nRUN gem install \'aws_lambda_ric\'\nENTRYPOINT [ "/usr/local/bundle/bin/aws_lambda_ric" ]\nCMD ["config/environment.Lamby.cmd"]\n')),(0,i.kt)("p",null,"The RIC allows us to use Docker's ",(0,i.kt)("inlineCode",{parentName:"p"},"CMD")," to load Rails and invoke a function. In this case we are loading our Rails application through its ",(0,i.kt)("inlineCode",{parentName:"p"},"config/environment.rb")," file (.rb extension is implied) and once that is done, calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"Lamby.cmd")," as the Lambda handler."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rails-lambda/lamby-cookiecutter"},"cookiecutter")," project defaults to building a Linux image targeting the ",(0,i.kt)("inlineCode",{parentName:"p"},"arm64")," architecture vs the traditional ",(0,i.kt)("inlineCode",{parentName:"p"},"x86_64"),". However, this is easily changed to accomodate your needs. Check out the ",(0,i.kt)(o.Z,{id:"cpu",mdxType:"DocLink"})," section for more details.")),(0,i.kt)("h2",{id:"sam-cloudformation-file"},"SAM CloudFormation File"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rails-lambda/lamby-cookiecutter/blob/master/%7B%7Bcookiecutter.project_name%7D%7D/template.yaml"},(0,i.kt)("inlineCode",{parentName:"a"},"template.yaml"))," file at the root of your project describes your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html"},"Serverless Application"),". Don't worry, we have done some heavy lifting for you. Here is the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-function.html"},"Serverless Function")," Resource we start you off with and a brief explanation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="template.yaml"',title:'"template.yaml"'},"RailsLambda:\n  Type: AWS::Serverless::Function\n  Metadata:\n    DockerContext: .\n    Dockerfile: Dockerfile\n    DockerTag: web\n  Properties:\n    AutoPublishAlias: live\n    FunctionUrlConfig:\n      AuthType: NONE\n    DeploymentPreference:\n      Type: AllAtOnce\n    MemorySize: 1792\n    PackageType: Image\n    Timeout: 30\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your Rails function will have a ",(0,i.kt)("inlineCode",{parentName:"li"},"MemorySize")," of 1,792 MB of RAM and 1 vCPU. This is the sweet spot for Rails speed and cost optimization. Remember, you're not running a web server in a single function nor scaling by memory."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"FunctionUrlConfig")," has been configured to be a public HTTP proxy. You can change this to IAM authentication or swap out to other web server integrations like API Gateway if you need their features. Details in other guides."),(0,i.kt)("li",{parentName:"ul"},"The maximum amount of ",(0,i.kt)("inlineCode",{parentName:"li"},"Timeout")," for an HTTP integration is 30 seconds.")),(0,i.kt)("img",{alt:"AWS SAM Introduction",src:a(5664).Z,style:{width:"100%",borderRadius:"5px",marginBottom:"0.5rem"}}),(0,i.kt)("p",null,"As your application grows you may end up adding Resources like EventBridge Rules, SQS, S3 Buckets, and IAM Policies. Please take some time to learn how SAM & CloudFormation work."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html"},"What Is the AWS Serverless Application Model (AWS SAM)?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md"},"Quick Intro & Tech Spec for SAM File")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"},"What is AWS CloudFormation?"))),(0,i.kt)("h2",{id:"development-container"},"Development Container"),(0,i.kt)("p",null,"Described in the ",(0,i.kt)(o.Z,{id:"quick-start",mdxType:"DocLink"})," guide, our Lamby starter makes use of the ",(0,i.kt)("a",{parentName:"p",href:"https://containers.dev"},"Development Container")," specification via a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rails-lambda/lamby-cookiecutter/tree/master/%7B%7Bcookiecutter.project_name%7D%7D/.devcontainer"},(0,i.kt)("inlineCode",{parentName:"a"},".devcontainer"))," directory. Commonly used with Codespaces, dev containers can be used locally with any editor."),(0,i.kt)("p",null,"Our dev container's ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," uses the same base image as the one at the root of your project. This helps ensure your development experience, like installing system dependencies and Ruby gems with native extensions, aligns with the same process as your production image."),(0,i.kt)("p",null,"We also leverage the devcontainer's ",(0,i.kt)("inlineCode",{parentName:"p"},"dockerComposeFile")," capability to include a MySQL service as well. The Lamby starter also includes a range of ",(0,i.kt)("a",{parentName:"p",href:"https://containers.dev/features"},"devcontainer features")," which are installed within the Ubuntu development image. For example, Node, Docker in Docker, SSH, and the AWS CLI & SAM CLI."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Technically you do not need to adopt these devcontainer patterns, but it is really nice to be able to use this container to ensure your CI/CD process is reproducable locally using VS Code or the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/devcontainers/cli"},"Dev Container CLI"),". More details in the following CI/CD section.")),(0,i.kt)("h2",{id:"deployment--cicd"},"Deployment & CI/CD"),(0,i.kt)("p",null,"So how does that CloudFormation file and container image get created within AWS? We use the AWS SAM CLI's ",(0,i.kt)("inlineCode",{parentName:"p"},"build"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"package"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," commands in a single ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rails-lambda/lamby-cookiecutter/blob/master/%7B%7Bcookiecutter.project_name%7D%7D/bin/deploy"},(0,i.kt)("inlineCode",{parentName:"a"},"bin/deploy"))," file. This file also does the following. Feel free to customize your deploy files as needed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Finds/Creates an ECR repository with the same name as your project."),(0,i.kt)("li",{parentName:"ul"},"Sets various ENV variables if not set already. For example, easy to deploy to multiple regions by setting ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_REGION"),"."),(0,i.kt)("li",{parentName:"ul"},"Install gems into local vendor/bundle for deployment via a Docker ",(0,i.kt)("inlineCode",{parentName:"li"},"COPY"),".")),(0,i.kt)("p",null,"If you used our ",(0,i.kt)(o.Z,{id:"quick-start",mdxType:"DocLink"})," guide, you likely made your first deploy using VS Code's integrated terminal within the development container. This is critically important since your Ruby gems with native extensions are built within the context of the Ruby Ubuntu image being built and copied to ECR for Lambda to use."),(0,i.kt)("p",null,"When automating deployments, the system must have permission to create the needed resources and IAM Roles with permission(s) for your application to work. Most hobby users have admin level access to their own AWS account. For more security minded folks, consider creating a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/access-control-identity-based.html"},"least privilege user")," for your deployments with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html"},"OpenID Connect")," identity providers. We found that the ",(0,i.kt)("inlineCode",{parentName:"p"},"AWSCodeDeployFullAccess")," managed policy is often overlooked."),(0,i.kt)("h3",{id:"circleci"},"CircleCI"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"arm64")," is your target platform in production, CircleCI make it easy to to do so using their ",(0,i.kt)("a",{parentName:"p",href:"https://circleci.com/docs/using-arm/"},"Arm Execution Environment"),". Our starter includes a CircleCI ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," file that runs tests on each commit or deploy by manually triggering a workflow. It even uses the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/devcontainers/cli"},"Devcontainer CLI")," to ensure your CI/CD matches your development experience. Changing between ",(0,i.kt)("inlineCode",{parentName:"p"},"arm64")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"x86_64")," is described in our ",(0,i.kt)(o.Z,{id:"cpu",mdxType:"DocLink"})," guide."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rails-lambda/lamby-cookiecutter/blob/master/%7B%7Bcookiecutter.project_name%7D%7D/.circleci/config.yml"},"Test & Deploy CircleCI Template"))),(0,i.kt)("p",null,'Deploying requires manually triggering the workflow. Simply select a branch then click "Trigger Workflow" and pass a string parameter called "workflow" with a value of "deploy". Feel free to change this workflow to suite your needs.'),(0,i.kt)(r.Z,{alt:"CircleCI Trigger Workflow for Deploy",sources:{light:(0,l.Z)("/img/docs/circle-ci-trigger-workflow-light.png"),dark:(0,l.Z)("/img/docs/circle-ci-trigger-workflow-dark.png")},mdxType:"ThemedImage"}),(0,i.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"You can automate both the test and deploy process using our provided GitHub Actions which also leverage the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/devcontainers/ci"},"Dev Container Build and Ruby CI")," project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rails-lambda/lamby-cookiecutter/blob/master/%7B%7Bcookiecutter.project_name%7D%7D/.github/workflows/deploy.yml"},"Deploy GitHub Action Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rails-lambda/lamby-cookiecutter/blob/master/%7B%7Bcookiecutter.project_name%7D%7D/.github/workflows/test.yml"},"Test GitHub Action Template"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Within your project's GitHub repository ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/reference/encrypted-secrets"},"add two Encrypted Secrets")," using the credentials values above with the environment names of ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),"."),(0,i.kt)("li",{parentName:"ol"},"If needed, change the ",(0,i.kt)("inlineCode",{parentName:"li"},"aws-region")," in your ",(0,i.kt)("inlineCode",{parentName:"li"},".github/workflows/deploy.yml")," file from ",(0,i.kt)("inlineCode",{parentName:"li"},"us-east-1")," to your own region."),(0,i.kt)("li",{parentName:"ol"},'Trigger a deploy by navigating to the Deploy workflow and clicking "Run workflow".')),(0,i.kt)("img",{alt:"Lambda & Rails deploy with GitHub Actions",src:a(5339).Z,style:{width:"100%",borderRadius:"5px"}}))}h.isMDXComponent=!0},5664:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws_sam_introduction-590ef90646d8fd6b180de45a8a3b554d.png"},5339:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github-actions-deploy-44671ab963c8788ae816dec248ecfe76.png"}}]);