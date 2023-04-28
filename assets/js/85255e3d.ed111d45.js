"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},304:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);const o={anatomy:"How Lamby Works",cpu:"CPU Architecture",environment:"ENV Variables & Secrets",assets:"JavaScript & Assets",deploy:"Build & Deploy","custom-domain":"Custom Domain Names",activejob:"ActiveJob & Background Processing",observability:"Logging & Observability",database:"Database & VPCs",webservers:"Web Proxy Integrations"};function i(e){let{id:t,name:a,anchor:i}=e;const r=a||o[t]||t.replace(/(_|-)/g," ").split(" ").map((e=>e.charAt(0).toUpperCase()+e.toLowerCase().slice(1))).join(" ");return i?n.createElement("a",{href:`/docs/${t}#${i}`},r):n.createElement("a",{href:`/docs/${t}`},r)}},3442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(7462),o=(a(7294),a(3905)),i=a(304),r=a(941),s=a(4996);const l={id:"cold-starts",toc_max_heading_level:2},c="Cold Starts",d={unversionedId:"cold-starts",id:"cold-starts",title:"Cold Starts",description:"Cold starts (or init times) are an incredibly addictive topic. In many cases they can be ignored as an optimization to perform when the time and data suggests action. In practice, the more traffic your function handles the less likely cold starts are an issue since they statistically disappear under the 99th percentile. However in rare cases, you may want to optimize for them. This guide can help you make decisions on how to go about it.",source:"@site/docs/cold-starts.mdx",sourceDirName:".",slug:"/cold-starts",permalink:"/docs/cold-starts",draft:!1,editUrl:"https://github.com/rails-lambda/lamby-site/tree/master/docs/cold-starts.mdx",tags:[],version:"current",frontMatter:{id:"cold-starts",toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"Web Proxy Integrations",permalink:"/docs/webservers"}},p={},u=[{value:"Monitoring with CloudWatch",id:"monitoring-with-cloudwatch",level:2},{value:"Bootsnap by Shopify",id:"bootsnap-by-shopify",level:2},{value:"Provisioned Concurrency",id:"provisioned-concurrency",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Auto Scaling",id:"auto-scaling",level:3},{value:"Using a Schedule",id:"using-a-schedule",level:3},{value:"Concurrency CloudWatch Metrics",id:"concurrency-cloudwatch-metrics",level:3},{value:"Gradual Deployments",id:"gradual-deployments",level:2},{value:"Other Cold Start Factors",id:"other-cold-start-factors",level:2}],m={toc:u};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cold-starts"},"Cold Starts"),(0,o.kt)("p",null,"Cold starts (or init times) are an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html#runtimes-lifecycle"},"incredibly addictive")," topic. In many cases they can be ignored as an optimization to perform when the time and data suggests action. In practice, the more traffic your function handles the less likely cold starts are an issue since they statistically disappear under the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/aws/amazon-cloudwatch-update-percentile-statistics-and-new-dashboard-widgets/"},"99th percentile"),". However in rare cases, you may want to optimize for them. This guide can help you make decisions on how to go about it."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Modest sized Rails applications generally boot within 3 to 5 seconds. This happens exactly once for the duration of the function's lifecycle which could last for 30 minutes or more and service a huge amount of traffic with no latency.")),(0,o.kt)("h2",{id:"monitoring-with-cloudwatch"},"Monitoring with CloudWatch"),(0,o.kt)("p",null,"You can not optimize what you do not measure. Thankfully, AWS Lambda logs initialization time of your function to CloudWatch logs which you can query using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html"},"CloudWatch Insights"),"."),(0,o.kt)("p",null,"This query below will give you a nice percentile breakdown for your application's init duration which is the code outside the handler method. Feel free to change the bin bucket from 1 hour to whatever time helps you. For example, using ",(0,o.kt)("inlineCode",{parentName:"p"},"1d")," (1 day) over a longer duration (weeks) allows you to see statistical trends. In general, your ",(0,o.kt)("inlineCode",{parentName:"p"},"p50")," should be under 5 seconds."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-coffee"},"fields @initDuration\n| filter ispresent(@initDuration)\n| stats pct(@initDuration, 5) as p5,\n        pct(@initDuration, 50) as p50,\n        pct(@initDuration, 95) as p95,\n        pct(@initDuration, 99) as p99\n  by bin(1h)\n")),(0,o.kt)(r.Z,{alt:"Rails cold start data from CloudWatch Insights. Shows percentiles for p5, p50, p95, and p99.",sources:{light:(0,s.Z)("/img/docs/cold-start-cloudwatch-insights-percentiles.png"),dark:(0,s.Z)("/img/docs/cold-start-cloudwatch-insights-percentiles-dark.png")},mdxType:"ThemedImage"}),(0,o.kt)("h2",{id:"bootsnap-by-shopify"},"Bootsnap by Shopify"),(0,o.kt)("p",null,"Reducing your Rails applications boot time should be your first option against cold starts. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Shopify/bootsnap"},"Bootsnap")," has been developed by Shopify to speed up Rails boot time for production environments using a mix of compile and load path caches. When complete, your deployed container will have everything it needs to boot faster!"),(0,o.kt)("p",null,"How much faster? Generally 1 to 3 seconds depending on your Lambda application. Adding Bootsnap to your Rails Lambda application is straightforward. First, add the gem to your production group in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Gemfile"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby",metastring:'title="Gemfile"',title:'"Gemfile"'},"group :production do\n  gem 'bootsnap'\nend\n")),(0,o.kt)("p",null,"Next, we need to add the Bootsnap caches with your deployed container. Add these lines to your project's ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," after your ",(0,o.kt)("inlineCode",{parentName:"p"},"COPY . .")," declaration. It will run two commands. The first is the standard Bootsnap precompile which builds both the Ruby ISeq & YAML caches. The second line loads your application into memory and thus automatically creates the ",(0,o.kt)("inlineCode",{parentName:"p"},"$LOAD_PATH")," cache."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"ENV BOOTSNAP_CACHE_DIR=/var/task/tmp/cache\nRUN bundle exec bootsnap precompile --gemfile . \\\n && bundle exec ruby config/environment.rb\n")),(0,o.kt)("p",null,"Afterward you should be able to verify that Bootsnap's caches are working. Measure your cold starts using a 1 day stats duration for better long term visibility."),(0,o.kt)("h2",{id:"provisioned-concurrency"},"Provisioned Concurrency"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Provisioned concurrency comes with additional execution costs.")),(0,o.kt)("p",null,"AWS provides an option called ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html"},"Provisioned Concurrency")," (PC) which allows you to warm instances prior to receiving requests. This lets you execute Lambda functions with super low latency and no cold starts. Besides setting a static PC value, there are two fundamental methods for scaling with Provisioned Concurrency. Please use the ",(0,o.kt)("a",{parentName:"p",href:"#concurrency-cloudwatch-metrics"},"Concurrency CloudWatch Metrics")," section to help you make a determination on what method is right for you."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Our ",(0,o.kt)(i.Z,{id:"quick-start",mdxType:"DocLink"})," cookiecutter includes both an ",(0,o.kt)("inlineCode",{parentName:"p"},"AutoPublishAlias")," and an all at once ",(0,o.kt)("inlineCode",{parentName:"p"},"DeploymentPreference"),'. The publish alias is needed for provisioned concurrency. You can read about both in AWS "',(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html"},"Deploying serverless applications gradually"),"\" guide. The code snippets below assume your function's logical resource is ",(0,o.kt)("inlineCode",{parentName:"p"},"RailsLambda")," and you have an alias named ",(0,o.kt)("inlineCode",{parentName:"p"},"live"),"."),(0,o.kt)("h3",{id:"auto-scaling"},"Auto Scaling"),(0,o.kt)("p",null,"Here we are creating an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-policy.html"},(0,o.kt)("inlineCode",{parentName:"a"},"AWS::AutoScaling::ScalingPolicy"))," and a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html"},(0,o.kt)("inlineCode",{parentName:"a"},"AWS::ApplicationAutoScaling::ScalableTarget"))," which effectively creates a managed CloudWatch Rule that monitors your application to scale it up and down as needed. In this example we set a maximum of ",(0,o.kt)("inlineCode",{parentName:"p"},"40")," and minimal of ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," provisioned instances. We have a ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetValue")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"0.4")," which is a percentage of provisioned concurrency to trigger the CloudWatch Rules via the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProvisionedConcurrencyUtilization")," metric. In this case, lower equals a more aggressive scaling strategy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="template.yaml"',title:'"template.yaml"'},"Resources:\n  RailsLambda:\n    # ...\n    Properties:\n      ProvisionedConcurrencyConfig:\n        ProvisionedConcurrentExecutions: 5\n\n  RailsScalableTarget:\n    Type: AWS::ApplicationAutoScaling::ScalableTarget\n    Properties:\n      MaxCapacity: 40\n      MinCapacity: 5\n      ResourceId: !Sub function:${RailsLambda}:live\n      RoleARN: !Sub arn:aws:iam::${AWS::AccountId}:role/aws-service-role/lambda.application-autoscaling.amazonaws.com/AWSServiceRoleForApplicationAutoScaling_LambdaConcurrency\n      ScalableDimension: lambda:function:ProvisionedConcurrency\n      ServiceNamespace: lambda\n    DependsOn: RailsLambdaAliaslive\n\n  RailsScalingPolicy:\n    Type: AWS::ApplicationAutoScaling::ScalingPolicy\n    Properties:\n      PolicyName: utilization\n      PolicyType: TargetTrackingScaling\n      ScalingTargetId: !Ref RailsScalableTarget\n      TargetTrackingScalingPolicyConfiguration:\n        TargetValue: 0.4\n        PredefinedMetricSpecification:\n          PredefinedMetricType: LambdaProvisionedConcurrencyUtilization\n")),(0,o.kt)("p",null,"Please read this related article. ",(0,o.kt)("a",{parentName:"p",href:"https://georgemao.medium.com/understanding-lambda-provisioned-concurrency-autoscaling-735eb14040cf"},"Lambda Provisioned Concurrency AutoScaling is Awesome. Make sure you understand how it works!")," It goes into great detail on how short traffic bursts (common for most of us) can be missed by the standard CloudWatch Alarms and possible remediation to scale up."),(0,o.kt)("h3",{id:"using-a-schedule"},"Using a Schedule"),(0,o.kt)("p",null,"In this example we have measured via CloudWatch Metrics (image above) that our concurrent executions never really goes past ",(0,o.kt)("inlineCode",{parentName:"p"},"40")," instances during daytime peak usage. In this case to totally remove cold starts from a small percentage of requests we can draw a big virtual box around the curves above to always keep ",(0,o.kt)("inlineCode",{parentName:"p"},"40")," instances warm during our peak times starting at 6am EST and going back down to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," Provisioned Concurrency at 11PM EST. Here is how we would do that with a Provisioned Concurrency schedule."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="template.yaml"',title:'"template.yaml"'},'Resources:\n  RailsScalableTarget:\n    Type: AWS::ApplicationAutoScaling::ScalableTarget\n    Properties:\n      MaxCapacity: 0\n      MinCapacity: 0\n      ResourceId: !Sub function:${RailsLambda}:live\n      RoleARN: !Sub arn:aws:iam::${AWS::AccountId}:role/aws-service-role/lambdaapplication-autoscaling. amazonaws.com/AWSServiceRoleForApplicationAutoScaling_LambdaConcurrency\n      ScalableDimension: lambda:function:ProvisionedConcurrency\n      ServiceNamespace: lambda\n      ScheduledActions:\n        - ScalableTargetAction:\n            MaxCapacity: 0\n            MinCapacity: 0\n          ScheduledActionName: ScaleDown\n          Schedule: "cron(0 3 * * ? *)"\n        - ScalableTargetAction:\n            MaxCapacity: 40\n            MinCapacity: 40\n          ScheduledActionName: ScaleUp\n          Schedule: "cron(0 10 * * ? *)"\n    DependsOn: RailsLambdaAliaslive\n')),(0,o.kt)("h3",{id:"concurrency-cloudwatch-metrics"},"Concurrency CloudWatch Metrics"),(0,o.kt)("p",null,"The graphs below were made using the following managed AWS Lambda CloudWatch Metrics. Please make sure to use your deploy alias of ",(0,o.kt)("inlineCode",{parentName:"p"},":live")," when targeting your functions resource in these reports."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ConcurrentExecutions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ProvisionedConcurrentExecutions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ProvisionedConcurrencySpilloverInvocations"))),(0,o.kt)("p",null,"This chart shows that a static ",(0,o.kt)("inlineCode",{parentName:"p"},"ProvisionedConcurrentExecutions")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," can handle most invocations for the first 3 days. Later, for the remaining 4 days, auto scaling was added with a ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetValue")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"0.4"),". Because of the workload's spiky nature, the Invocations look almost 100% provisioned. However, the concurrent executions show otherwise."),(0,o.kt)(r.Z,{alt:"Rails in Lambda Concurrent Executions, Invocations, and Provisioned Executions & Spill Invokes",sources:{light:(0,s.Z)("/img/docs/cold-start-concurrency.png"),dark:(0,s.Z)("/img/docs/cold-start-concurrency-dark.png")},mdxType:"ThemedImage"}),(0,o.kt)("p",null,"Here is a 7 day view from the 4 day mark above. The ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetValue")," is still set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.4"),". It illustrates how the default CloudWatch Rule for ",(0,o.kt)("inlineCode",{parentName:"p"},"ProvisionedConcurrencyUtilization")," metrics over a 3 minute span are not quick enough to scale PC. It is possible to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetValue")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"0.1")," to force the PC lines to meet the blue. But your cost at this point would be unrealistically high."),(0,o.kt)(r.Z,{alt:"Rails in Lambda Concurrent Executions and Provisioned Executions",sources:{light:(0,s.Z)("/img/docs/cold-start-concurrency-vs-spilled.png"),dark:(0,s.Z)("/img/docs/cold-start-concurrency-vs-spilled-dark.png")},mdxType:"ThemedImage"}),(0,o.kt)("h2",{id:"gradual-deployments"},"Gradual Deployments"),(0,o.kt)("p",null,"As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"#provisioned-concurrency"},"Provisioned Concurrency")," section we use a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"DeploymentPreference")," value called ",(0,o.kt)("inlineCode",{parentName:"p"},"AllAtOnce"),". When a deploy happens, Lambda will need to download your new ECR image before your application is initialized. In certain high traffic scenarios along with a potentially slow loading application, deploys can be a thundering herd effect causing your concurrency to spike and a small percentage of users having longer response times."),(0,o.kt)("p",null,"Please see AWS' \"",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html"},"Deploying serverless applications gradually"),'" guide for full details but one way to soften this would be to roll out your new code in 10 minutes total via the ',(0,o.kt)("inlineCode",{parentName:"p"},"Linear10PercentEvery1Minute")," deployment preference. This will automatically create a ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/codedeploy/"},"AWS CodeDeploy")," application and deployments for you. So cool!"),(0,o.kt)("h2",{id:"other-cold-start-factors"},"Other Cold Start Factors"),(0,o.kt)("p",null,"Most of these should be considered before using Provisioned Concurrency."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Client Connect Timeouts")," - Your Lambda application may be used by clients who have a low ",(0,o.kt)("a",{parentName:"p",href:"https://ruby-doc.org/stdlib/libdoc/net/http/rdoc/Net/HTTP.html#open_timeout-attribute-method"},"http open timeout"),". If this is the case, you may have to increase client timeouts, leverage provisioned concurrency, and/or reduce initialization time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Update Ruby")," - New versions of Ruby typically boot and run faster. Since our ",(0,o.kt)(i.Z,{id:"quick-start",name:"cookiecutter",mdxType:"DocLink"})," project uses custom Ruby Ubuntu with Lambda containers, updating Ruby should be as easy as changing a few lines of code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Memory & vCPU")," - It has been proposed that increased Memory/vCPU could reduce cold starts. We have not seen any evidence of this. For example, we recommend that Rails functions use ",(0,o.kt)("inlineCode",{parentName:"p"},"1792")," for its ",(0,o.kt)("inlineCode",{parentName:"p"},"MemorySize")," equal to 1 vCPU. Any lower would sacrifice response times. Tests showed that increasing this to ",(0,o.kt)("inlineCode",{parentName:"p"},"3008")," equal to 2 vCPUs did nothing for a basic Rails application but cost more. However, if your function does concurrent work doing initialization, consider testing different values here."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lazy DB/Resource Connections"),' - Rails is really good at lazy loading database connections. This is important to keep the "Init" phase of the ',(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html#runtimes-lifecycle"},"Lambda execution lifecycle"),' quick and under 10s. This allows the first "Invoke" to connect to other resources. To keep init duration low, make sure your application does not eagerly connect to resources. Both ActiveRecord and Memcached w/Dalli are lazy loaded by default.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ActiveRecord Schema Cache")," - Commonly called Rails' best kept performance feature, the ",(0,o.kt)("a",{parentName:"p",href:"https://kirshatrov.com/2016/12/13/schema-cache/"},"schema cache")," can help reduce first request response time after Rails is initialized. So it should not help the init time but it could very easily help the first invoke times."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reduce Image Size")," - Sort of related to your Ruby version, always make sure that your ECR image is as small as possible. Lambda Containers supports up to 10GB for your image. There is no data on how much this could effect cold starts. So please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rails-lambda/lamby/discussions"},"share your stories"),"."))}h.isMDXComponent=!0}}]);