"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"tailscale-extension-for-lambda-containers","metadata":{"permalink":"/blog/tailscale-extension-for-lambda-containers","source":"@site/blog/2023-06-03-tailscale-extension-for-lambda-containers.mdx","title":"Using Tailscale on Lambda for a Live Development Proxy","description":"Using Tailscale on Lambda for a Live Development Proxy","date":"2023-06-03T00:00:00.000Z","formattedDate":"June 3, 2023","tags":[{"label":"tailscale","permalink":"/blog/tags/tailscale"},{"label":"websockets","permalink":"/blog/tags/websockets"},{"label":"lambda","permalink":"/blog/tags/lambda"},{"label":"extension","permalink":"/blog/tags/extension"},{"label":"container","permalink":"/blog/tags/container"}],"readingTime":3.325,"hasTruncateMarker":false,"authors":[{"name":"Ken Collins","title":"Principal Engineer & Cloud Architect","url":"https://dev.to/metaskills","imageURL":"https://github.com/metaskills.png","key":"kcollins"}],"frontMatter":{"slug":"tailscale-extension-for-lambda-containers","title":"Using Tailscale on Lambda for a Live Development Proxy","authors":["kcollins"],"tags":["tailscale","websockets","lambda","extension","container"]},"nextItem":{"title":"Welcome Lamby v4!","permalink":"/blog/welcome-to-lamby-v4"}},"content":"import styles from \'./youtube.css\';\\n\\n![Using Tailscale on Lambda for a Live Development Proxy](https://lamby.cloud/img/blog/tailscale/header.png)\\n\\n\u26a0\ufe0f DISCLAIMER: In no way am I advocating for the use of live proxies as a normal way to develop against cloud resources. However in some edge cases, such as developing a new system, live dev proxies or the general use of Tailscale in Lambda could be useful.\\n\\n## \ud83d\udc0b Tailscale on Lambda\\n\\n[Tailscale](https://tailscale.com) makes networking easy. Like really easy. It shines in situations where private networks do not allow inbound connections. Tailscale can connect your devices and development environments for easy access to remote resources, or allow those remote systems to access your home or office network devices.\\n\\nA few years ago Corey Quinn wrote a Tailscale [Lambda Extension](https://www.lastweekinaws.com/blog/corey-writes-open-source-code-for-lambda-and-tailscale/). It is great and helped a lot of folks. Today, I\'d like to share a new project based on Corey\'s work that makes it even easier to use Tailscale in Lambda Container. Check it out here.\\n\\n**[\ud83d\udd17 Tailscale Lambda Extension for Containers](https://github.com/rails-lambda/tailscale-extension)** on GitHub \ud83d\udc19\\n\\nThis new version tries to improve upon Corey\'s work. Initialization is now stable, there are more configuration options, and we even have multi-platform Docker container packages for both `x86_64` and `arm64`. We even have Amazon Linux 2 and Debian/Ubuntu variants. Installation is really easy, simply add one line to your Dockerfile. For example:\\n\\n```dockerfile\\nFROM public.ecr.aws/lambda/ruby:3.2\\nRUN yum install -y curl\\nCOPY --from=ghcr.io/rails-lambda/tailscale-extension-amzn:1 /opt /opt\\n```\\n\\nOnce your container starts, taking to any device within your tailnet can be done by using the local [SOCKS5](https://en.wikipedia.org/wiki/SOCKS) proxy. In the example below, we are using Ruby\'s [socksify](https://github.com/astro/socksify-ruby) gem.\\n\\n```ruby\\nrequire \'socksify/http\'\\nNet::HTTP.socks_proxy(\'localhost\', 1055).start(...) do |http|\\n  # your http code here...\\nend\\n```\\n\\n## \ud83d\udd0c ActionCable on Lambda \\n\\nHow did I use Tailscale for the [Rails on Lambda](https://lamby.cloud) work? A few months ago, I [started work](https://twitter.com/metaskills/status/1647714842550185985) on the last critical part of the Rails ecosystem which did not work on Lambda... [ActionCable](https://guides.rubyonrails.org/action_cable_overview.html) & WebSockets. Specifically, I wanted [Hotwire](https://hotwired.dev) to work.\\n\\nSo far, everything is [working great](https://twitter.com/metaskills/status/1651067256242151424) with our new LambdaCable gem. Eventually it will be a drop-in adapter for ActionCable and join the ranks of other popular alternatives like [AnyCable](https://anycable.io). To bring the project to completion faster, I needed feedback loops that were much faster than deploying code to the cloud. I needed a development proxy! One where my Rails application would receive events from both Lambda\'s Function URLs and the WebSocket events from API Gateway. Illustrated below with a demo video.\\n\\n![Architecture diagram of the use of a Lambda development proxy for WebSockets with API Gateway.](https://lamby.cloud/img/blog/tailscale/live-development-proxy-overview.png)\\n\\n<div class=\\"video-container\\">\\n  <iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/k02k38o4ih8\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n\\nIf you are curious to learn more about how Rails & Lambda work together, check out our [Lamby](https://lamby.cloud) project. The architecture of Lambda Containers works so well with Rails since our framework distills everything from HTTP, Jobs, Events, & WebSocket connections down to Docker\'s `CMD` interface. The architecture above at the proxy layer was easy to build and connect up to our single delegate function, `Lamby.cmd`. Shown below:\\n\\n![Architecture diagram of the use of a Lambda development proxy for WebSockets with API Gateway.](https://lamby.cloud/img/blog/tailscale/live-development-proxy-detail.png)\\n\\nFor our Rails application on Lambda, here are the changes we made to leverage this. All outlined in our [WebSockets Demo Pull Request](https://github.com/rails-lambda/websocket-demo/pull/4).\\n\\n- Created a `.localdev` folder. Added a copy of our SAM template.yaml for all AWS Resources. \\n- Made a simple `.localdev/Dockerfile` that included the Tailscale Extension along with basic proxy code.\\n- Leveraged Lamby\'s [Local Development Proxy Sever](https://github.com/rails-lambda/lamby/pull/164).\\n- Ensured our Devcontainers exposed port 3000 to all local network devices so Tailscale could detect the service.\\n\\n\\nI hope you find reasons to learn more about Tailscale and how using a SOCKS5 proxy from Lambda could help your development or production needs. More so, I hope you like the new Lambda Extension project of ours making it easy for containerized applications to use. Drop us a comment if you do.\\n\\n**[\ud83d\udd17 Tailscale Lambda Extension for Containers](https://github.com/rails-lambda/tailscale-extension)** on GitHub \ud83d\udc19"},{"id":"welcome-to-lamby-v4","metadata":{"permalink":"/blog/welcome-to-lamby-v4","source":"@site/blog/2022-12-19-welcome-to-lamby-v4.mdx","title":"Welcome Lamby v4!","description":"I am incredibly happy to announcy Lamby v4 and a major update to our documentation website. Huge shout out to Docusaurus which has made in my opinion the best content-driven static site generator for open-source projects like our Lamby community.","date":"2022-12-19T00:00:00.000Z","formattedDate":"December 19, 2022","tags":[{"label":"rails","permalink":"/blog/tags/rails"},{"label":"lambda","permalink":"/blog/tags/lambda"},{"label":"containers","permalink":"/blog/tags/containers"}],"readingTime":3.065,"hasTruncateMarker":false,"authors":[{"name":"Ken Collins","title":"Principal Engineer & Cloud Architect","url":"https://dev.to/metaskills","imageURL":"https://github.com/metaskills.png","key":"kcollins"}],"frontMatter":{"slug":"welcome-to-lamby-v4","title":"Welcome Lamby v4!","authors":["kcollins"],"tags":["rails","lambda","containers"]},"prevItem":{"title":"Using Tailscale on Lambda for a Live Development Proxy","permalink":"/blog/tailscale-extension-for-lambda-containers"}},"content":"import DocLink from \\"../src/components/DocLink.js\\";\\nimport ThemedImage from \\"@theme/ThemedImage\\";\\nimport useBaseUrl from \\"@docusaurus/useBaseUrl\\";\\n\\nI am incredibly happy to announcy Lamby v4 and a major update to our documentation website. Huge shout out to [Docusaurus](https://docusaurus.io) which has made in my opinion the best content-driven static site generator for open-source projects like our Lamby community.\\n\\n<ThemedImage\\n  alt=\\"Lamby: Simple Rails & AWS Lambda Integration using Rack\\"\\n  sources={{\\n    light: useBaseUrl(\\"/img/lamby-rails-containers.jpg\\"),\\n    dark: useBaseUrl(\\"/img/lamby-rails-dark.jpg\\"),\\n  }}\\n/>\\n\\nSo what is new and will v4 break anything? Lots! Mostly new ways of thinking around the same basic architecture. Nothing should break either. Lamby v4\'s semver change is mostly marketing driven. Here is a short list of what is new.\\n\\n## Updated Starter\\n\\nWant to see all this new stuff in action? Use our <DocLink id=\\"quick-start\\" /> guide to deploy a new Rails application to AWS Lambda in 5min \u23f1\ufe0f.\\n\\n## Bring Your Own Containers\\n\\nLamby still works with the Zip packaging format, but all documentation on how to use it has been removed. Containers are here to stay and their value goes way past a simple packaging format.\\n\\n```mermaid\\n%%{init:{\'flowchart\':{\'nodeSpacing\': 20, \'rankSpacing\': 20}}}%%\\nflowchart LR\\n  %% Objects\\n  src-furl(Lambda Function URLs)\\n  src-apih(API Gateway HTTP API)\\n  src-apir(API Gateway REST API)\\n  src-alb(Application Load Balancer)\\n  invoke[/invoke/]\\n  lambda[Lambda Function]\\n  subgraph container[\\"Container Image\\"]\\n    direction LR\\n    ric[RIC -> config/env.Lamby.cmd]:::rics\\n    app[Event -> Rack -> Rails::App]:::pink\\n    os[Operatring System & Packages]:::desc\\n  end\\n  %% Flow\\n  src-furl --\x3e |Event| invoke\\n  src-apih --\x3e |Event v1 or v2| invoke\\n  src-apir --\x3e |Event| invoke\\n  src-alb --\x3e |Event| invoke\\n  invoke --\x3e lambda\\n  lambda --\x3e ric\\n  %% Styles\\n  classDef node fill:#a99ff0,stroke:#fff,stroke-width:4px,color:#000;\\n  classDef pink fill:#fe4f8b,stroke:#fff,stroke-width:4px,color:#fff;\\n  classDef orange fill:#ed8235,stroke:#fff,stroke-width:4px,color:#fff;\\n  classDef cont fill:#c6fffd,stroke:#70d6d2,stroke-width:4px,color:black,font-size:12px;\\n  classDef rics fill:#a99ff0,stroke:#fff,stroke-width:4px,color:#000;\\n  classDef desc fill:white,stroke:#ccc,stroke-width:2px,color:black;\\n  %% ,font-size:12px\\n  class src-apir,src-apih pink\\n  class src-alb orange\\n  class container cont\\n  class ric rics\\n```\\n\\nWe now encourage bringing your own containers by using Lambda\'s Runtime Interface Client (RIC). The RIC allows us to use Docker\'s `CMD` to load Rails and invoke a function. In this case we are loading our Rails application through its config/environment.rb file (.rb extension is implied) and once that is done, calling the new `Lamby.cmd` as the Lambda handler. No more `app.rb`\\nfile needed!\\n\\n```docker title=\\"Dockerfile\\"\\nFROM ruby:3.2-bullseye\\nRUN gem install \'aws_lambda_ric\'\\nENTRYPOINT [ \\"/usr/local/bundle/bin/aws_lambda_ric\\" ]\\nCMD [\\"config/environment.Lamby.cmd\\"]\\n```\\n\\n## Secrets with Crypteia\\n\\nThe [Crypteia](https://github.com/rails-lambda/crypteia) package is Rust Lambda Extension for any Runtime/Container to preload SSM Parameters as secure environment variables. It takes advantages of `LD_PRELOAD` to seamlessly fetch values from SSM when a process starts and then injects them as natively accesible Ruby `ENV` variables. Our <DocLink id=\\"quick-start\\" /> guide\'s cookiecutter includes Crypteia already for you via a Docker `COPY` command into the Lambda Extension `/opt` directory.\\n\\n```docker title=\\"Dockerfile\\"\\nFROM ruby:3.2-bullseye\\n# highlight-next-line\\nCOPY --from=ghcr.io/rails-lambda/crypteia-extension-debian:1 /opt /opt\\n```\\n\\nUsage is simply done by adding variables to your SAM template and accessing the values fetched from SSM like any other environment variable. Please read the Crypteia\'s [documentation](https://github.com/rails-lambda/crypteia) for full details.\\n\\n```title=\\"template.yaml\\"\\nGlobals:\\n  Environment:\\n    Variables:\\n      SECRET: x-crypteia-ssm:/myapp/SECRET\\n```\\n\\n```ruby\\nENV[\'SECRET\'] # 1A2B3C4D5E6F\\n```\\n\\n## Development Containers\\n\\nDescribed in the <DocLink id=\\"quick-start\\" /> guide, our Lamby starter makes use of the [Development Container](https://containers.dev) specification via a [`.devcontainer`](https://github.com/rails-lambda/lamby-cookiecutter/tree/master/%7B%7Bcookiecutter.project_name%7D%7D/.devcontainer) directory. Commonly used with Codespaces, dev containers can be used locally with any editor.\\n\\nOur dev container\'s `Dockerfile` uses the same base image as the one at the root of your project. This helps ensure your development experience, like installing system dependencies and Ruby gems with native extensions, aligns with the same process as your production image.\\n\\nWe also leverage the devcontainer\'s `dockerComposeFile` capability to include a MySQL service as well. The Lamby starter also includes a range of [devcontainer features](https://containers.dev/features) which are installed within the Ubuntu development image. For example, Node, Docker in Docker, SSH, and the AWS CLI & SAM CLI."}]}')}}]);