import { ReadingText } from '../types';
import { READING_SET_1_TEXTS } from './officialFormat/readingSet1';
import { READING_SET_2_TEXTS } from './officialFormat/readingSet2';

export const READING_TEXTS: Record<string, ReadingText> = {
  // English for IT 1 - Module 5: InfoSec Policy
  'txt-01': {
    id: 'txt-01',
    title: 'Migrating to a Zero-Trust Network Architecture',
    topic: 'V05',
    wordCount: 184,
    text: `Traditional enterprise perimeter security relied on an implicit assumption: any entity inside the corporate local area network (LAN) was inherently trustworthy. However, the proliferation of remote workforces, hybrid cloud infrastructures, and sophisticated credential theft has rendered perimeter-only defenses obsolete.

Under a modern Zero-Trust Network Architecture (ZTNA), the guiding principle is strict: never trust, always verify. Every access request—regardless of whether it originates from a workstation physically plugged into the headquarters switch or from an external cellular hotspot—must undergo explicit identity validation, multi-factor authentication, and posture assessment before access to any individual workload is granted.

Furthermore, least-privilege access policies segment resources at the application layer rather than granting broad network-level subnet visibility. By implementing micro-segmentation, security engineers ensure that even if an adversary successfully compromises a single developer workstation, lateral movement across internal databases is mathematically restricted. Periodic re-authentication tokens expire every four hours, preventing session hijacking from remaining unnoticed. While initial deployment requires significant policy refactoring, organizations report an eighty percent decrease in lateral infection spread within the first quarter.`
  },

  // English for IT 1 - Module 1: Supplier Evaluation / OS Selection
  'txt-02': {
    id: 'txt-02',
    title: 'Operating System Selection for Edge Gateway Appliances',
    topic: 'V08',
    wordCount: 198,
    text: `When provisioning edge computing appliances and network inspection nodes, engineering teams must evaluate operating system trade-offs between monolithic general-purpose distributions and specialized lightweight Unix-like kernels. 

General-purpose enterprise Linux distributions offer extensive package repositories, comprehensive driver support for legacy hardware, and familiar administrative tooling for Tier-1 support engineers. However, their substantial background daemon footprint and broad default attack surface require aggressive hardening. Unnecessary listening services must be systematically disabled, and automated patch management can inadvertently introduce kernel regressions during scheduled maintenance windows.

Conversely, specialized immutable micro-distributions provide read-only root filesystems and minimal dependency trees. Because the core system files cannot be modified during normal execution, malicious binary injection and persistent rootkits are effectively mitigated at the filesystem level. Upgrades are executed via atomic A/B partition swaps: if a boot integrity check fails after an update, the appliance autonomously rolls back to the previously validated operating state within thirty seconds. Although debugging immutable instances requires specialized containerized toolsets that junior analysts may find challenging initially, the dramatic reduction in unscheduled downtime makes immutable architectures the preferred standard for remote substations.`
  },

  // English for IT 2 - Module 2: "A Feature, Not a Bug"
  'txt-03': {
    id: 'txt-03',
    title: 'Customer Support and Product Management: A Feature, Not a Bug',
    topic: 'V03',
    wordCount: 188,
    text: `In enterprise software support and product management, distinguishing between a legitimate software defect and an intentional design constraint is a recurring source of customer friction. When an engineering team updates an authentication portal to automatically terminate idle browser sessions after ten minutes, end users frequently submit urgent trouble tickets reporting that the application is continually crashing.

From the customer's standpoint, this behavior constitutes an unexpected impediment to their daily workflow. However, from the information security officer's perspective, aggressive session timeouts represent a mandatory security control designed to prevent session hijacking on unattended shared workstations. 

When frontline support technicians dismiss these concerns by stating that the behavior is simply "a feature, not a bug", customer dissatisfaction invariably escalates. Effective technical communication requires empathy and contextual transparency. Rather than reciting rigid policy jargon, support engineers ought to explain the precise threat model that the feature mitigates, while offering practical workflow alternatives, such as implementing persistent browser certificates or single sign-on integration. Transparent explanations transform user frustration into collaborative security awareness.`
  },

  // English for IT 2 - Module 3: Unix & Ubuntu
  'txt-04': {
    id: 'txt-04',
    title: 'Evaluating Operating Systems: Traditional Unix vs. Ubuntu Server LTS',
    topic: 'V08',
    wordCount: 194,
    text: `When architecting core infrastructure for high-throughput telecommunications and financial backend systems, technical directors frequently debate the relative merits of traditional proprietary Unix distributions versus community-backed enterprise platforms like Ubuntu Server Long Term Support (LTS).

Proprietary Unix systems, such as AIX and Solaris, established the industry benchmark for hardware-level reliability, advanced storage volume management, and robust kernel virtualization. Large telecommunications providers invested decades into developing highly tailored runbooks for proprietary Unix utilities. However, their slow release cadence, proprietary hardware lock-in, and exorbitant licensing models have made scaling modern cloud-native microservices economically prohibitive.

In contrast, Ubuntu Server LTS combines the stability of Debian with predictable five-year security maintenance cycles. Its seamless integration with container runtimes, Kubernetes orchestrators, and automated infrastructure-as-code tooling has made it the prevailing standard across hybrid cloud environments. Furthermore, because a massive global community of DevOps engineers and security researchers actively audits Ubuntu repositories, critical vulnerabilities are patched and upstreamed significantly faster than in proprietary Unix ecosystems. While legacy mainframe applications remain tied to Unix, greenfield cloud workloads overwhelmingly adopt Ubuntu.`
  },

  // English for IT 1 - Module 1: Section 5 – Reading: Supplier Evaluation Modules
  'txt-it1-1.5': {
    id: 'txt-it1-1.5',
    title: 'Supplier Evaluation Module',
    topic: 'V08',
    wordCount: 498,
    text: `In March, we started developing the supplier evaluation module for one of the biggest sewing machine manufacturers in the country. The goal was to deliver the module by the end of the year. The customer needs the module in order to analyze last year's collaboration with all their suppliers, reveal unreliable suppliers, and re-evaluate supplier ratings before renewing the contracts. Last year, our customer almost went out of business because they signed up a supplier that delayed their supply chain. They can’t afford to have similar failures. After the pandemic, the market became much more competitive and as a result, they now need to have predictable delivery dates and trusted suppliers. That’s why meeting the deadline for the supplier evaluation module is so important.

During development, however, we realized that the pandemic situation has had a considerable impact on our resources. In the last two months, more than half of the team has been absent due to sick leave or issues with childcare. Additionally, we’ve noticed a decrease in average team velocity. Reduced on-site collaboration seems to be causing problems with knowledge sharing and solution brainstorming. Luckily, we haven’t faced any scope creep until now.

Therefore we’ve re-estimated the project according to the current capacity. Our current delivery dates target the release by the middle of the next year. To mitigate the risks of not delivering the project on time, we have started looking for other ways to move forward.

The first option we considered was secondments from other teams. We’ve researched other teams' capacity, but it seems as if we can count only on manpower from the Rabbits and Eagles teams. Unfortunately, the secondment process would only be viable during the last quarter of the year.

The second option could be renegotiating the deal with the customer and trying to obtain funds for new contractors. However, this possibility seems as if it could be the worst-case scenario, and we would like to avoid it if we can. As we learned from the sales team, they spent more than three months closing the deal, and the customer was very strict about exceeding their budget. Additionally, finding new hires and onboarding them to the project may take longer than waiting for internal resources.

Our initial research showed that the customer needs only a few features to start evaluating suppliers. The rest can be delivered piece by piece. Therefore, a third option could be cutting the scope and incremental value delivery. With this approach, we can deliver a minimum viable product within the expected timeframes.

We recommend the last option, since it mitigates the risks of not delivering the required functionality on time. It also meets the customer's critical need, which is to start evaluating suppliers by the end of the year. If we decide to proceed with the third option, then the next step should include informing our customer about the plan. We should also speak with the customer-field teams to confirm the scope for a minimum viable product.`
  },

  // English for IT 1 - Module 2: Section 4 – Reading: Job Roles and Responsibilities
  'txt-it1-2.4': {
    id: 'txt-it1-2.4',
    title: 'Memo: Job Roles and Responsibilities',
    topic: 'V06',
    wordCount: 448,
    text: `Dear Mark,

I’m reaching out to you regarding the last events that took place while resolving the problems reported by the Marketing department. All the raised issues were isolated and removed, yet I have some suggestions that will improve your performance and make your work simpler.

First, let me remind you of the duties that go together with your position. As a network engineer you are obliged to handle the network-related topics. When dealing with the more complicated problems or the ones that expand beyond your scope of duties, you will definitely encounter a need to include colleagues from other departments. Such a situation took place recently. I don’t want to discourage you from becoming as involved as you did, but some of the work you did should be done by other people involved in the troubleshooting process. What I have in mind is that all the user-access layer cabling should be handled by the IT Helpdesk, not the networking team. The only exception here is the optical cabling, which is hardly ever used for that purpose. This basically means that all UTP copper patch cords are ordered, stored, and installed by this team. This also means troubleshooting tasks involving usage of cable testers or analyzers are not conducted by you.

Some of the tasks which did need to be done were verifying and, where necessary, fixing the cabling. Both of those tasks were conducted by you and you only. However, they are not your responsibilities, as they are jobs for the IT Helpdesk. Dominic, a person from the IT Helpdesk who was working with you on that problem, didn’t do anything. You said it was because he asked you to do his job, but he says it was because you didn’t tell him he was needed.

And now the important part - please do not hesitate to ask a colleague to do their job. It’s not rude and you’re not doing anyone a favor here by doing this work yourself. In fact, it’s the opposite. The other person is not able to do their job if they don’t know that they are required to, but they are responsible for doing it all the same. This person is trained and qualified to do such tasks, so the quality of this work should be good. The only thing that comes to my mind that may go against this approach is that this could make the whole process longer. This is the cost that we must accept.

You might, however, encounter a different situation where your request to a colleague would go unanswered, be denied, or be sent back to you. Your job role doesn’t allow you to enforce your request, so the option here is to report this behavior to me, your direct manager. I’ll contact the direct manager of this person or, if necessary, escalate this to the person above in the organization chart.

I hope this is a useful piece of advice that will make your work easier and less stressful.

Regards,
Jim`
  },

  // English for IT 1 - Module 3: 3.5 Reading: Compiler vs. Interpreter
  'txt-it1-3.5': {
    id: 'txt-it1-3.5',
    title: 'Execution Models: Ahead-of-Time Compilers vs. Runtime Interpreters',
    topic: 'V02',
    wordCount: 215,
    text: `When selecting a programming language for enterprise backend architecture, software engineers must evaluate the trade-offs between compiled and interpreted execution models. Both approaches translate human-readable source code into low-level machine instructions, yet their timing and operational characteristics differ fundamentally.

An Ahead-of-Time (AOT) compiler—such as those used in C++, Rust, or Go—analyzes and translates the entire codebase into a platform-specific binary executable before the program is ever deployed. Because lexical analysis, static type checking, and loop optimization occur during the build stage, compile-time errors are caught early in the continuous integration pipeline. Consequently, the resulting machine binary executes directly on the host processor with minimal runtime overhead and predictable memory latency.

Conversely, an interpreter processes source code statement by statement at runtime. While this eliminates lengthy build steps and enables cross-platform portability without recompilation, translating instructions on the fly introduces substantial CPU overhead. Modern enterprise platforms such as Java and C# bridge this divide through Just-In-Time (JIT) compilation: source code is first compiled into portable intermediate bytecode, which the virtual machine dynamically compiles into native machine code when frequently executed "hot paths" are detected during production traffic.`
  },

  // English for IT 1 - Module 4: 4.4 Reading: Asking Customers Questions
  'txt-it1-4.4': {
    id: 'txt-it1-4.4',
    title: 'Diagnostic Communication: Asking Customers Effective Questions',
    topic: 'V03',
    wordCount: 204,
    text: `In Tier-1 and Tier-2 technical support, the speed of incident resolution depends heavily on how engineers formulate diagnostic questions. When non-technical customers experience an application outage, bombarding them with internal architectural jargon or accusatory questions ("Did you overwrite your configuration file?") triggers defensiveness and obscures the root cause.

Effective support methodology begins with open-ended exploratory questions that allow the user to describe the workflow context in their own words, such as: "Could you walk me through what you were trying to accomplish right before the error message appeared?" Once the broader symptom is established, the analyst should transition to targeted, closed-ended verification steps to isolate variables—for instance, confirming whether the issue occurs across multiple browsers or exclusively over the corporate VPN.

Crucially, polite modal phrasing ("Would you mind checking...", "Could you possibly share a screenshot...") preserves psychological comfort while guiding the customer through log collection. By pairing empathetic active listening with structured binary elimination, support engineers can reproduce elusive defects in half the time without escalating routine configuration mismatches to senior developers.`
  },

  // English for IT 1 - Module 6: 6.5 Reading: The Pegasus Spyware Incident
  'txt-it1-6.5': {
    id: 'txt-it1-6.5',
    title: 'Forensic Threat Analysis: The Pegasus Zero-Click Spyware Architecture',
    topic: 'V05',
    wordCount: 218,
    text: `Traditional mobile phishing campaigns rely on human interaction, tricking a target into clicking a malicious link or installing a trojanized application. However, the Pegasus spyware incident demonstrated a paradigm shift in advanced persistent threats (APTs) through the deployment of "zero-click" exploitation vectors.

Rather than waiting for user interaction, zero-click exploits target vulnerabilities in background message-parsing daemons, such as image rendering libraries or voice-over-IP signaling protocols. Simply receiving a specially crafted invisible payload causes the parser to suffer a memory buffer overflow, granting the attacker arbitrary code execution privileges without triggering a single notification on the screen.

Once initial privilege escalation is achieved, modern spyware avoids writing permanent files to flash storage, where mobile endpoint detection agents might scan them. Instead, the payload resides exclusively in volatile RAM—a technique known as in-memory persistence. Even though rebooting the mobile device temporarily purges volatile memory, attackers often chain the exploit with a secondary kernel hook to re-infect the handset automatically. Mitigating zero-click threats requires rapid operating system patch cadence, strict sandboxing of media parsers, and automated daily device reboots for high-risk executives.`
  },

  // English for IT 2 - Module 5: 5.4 Reading: Email Support
  'txt-it2-5.4': {
    id: 'txt-it2-5.4',
    title: 'Enterprise NOC Escalation: Fiber-Optic Cut & BGP Failover Coordination',
    topic: 'V07',
    wordCount: 210,
    text: `Subject: URGENT [INC-9042] Primary MPLS Fiber Cut — Automated Failover to Secondary IPSec Tunnel

Dear Infrastructure Operations Team,

We are writing to inform you that at 06:42 UTC today, our upstream telecommunications carrier reported a physical fiber-optic cable cut caused by municipal excavation near the Frankfurt metropolitan exchange. As a result, your primary 10 Gbps MPLS circuit experienced a complete loss of light.

Within four seconds of detecting the carrier drop, our edge routers automatically withdrew the primary BGP prefixes and rerouted all production traffic across the secondary encrypted IPSec VPN tunnel terminating in Amsterdam. Whereas the primary MPLS circuit guarantees sub-five-millisecond latency, the backup IPSec tunnel operates with an average round-trip latency of eighteen milliseconds and a capped throughput of 2 Gbps.

To prevent bandwidth saturation while civil engineering crews splice the damaged fiber cable, we have applied temporary Quality of Service (QoS) traffic shaping. Real-time transactional database queries and VoIP channels remain prioritized, whereas bulk offsite snapshot replications have been paused until 22:00 UTC. Civil repairs are scheduled to conclude by 16:30 UTC, at which point we will gracefully drain and restore traffic to the primary circuit.`
  },

  // English for IT 2 - Module 6: 6.5 Reading: Feedback and Postmortems
  'txt-it2-6.5': {
    id: 'txt-it2-6.5',
    title: 'Engineering Culture: Conducting Blameless Postmortems After Sev-1 Outages',
    topic: 'V08',
    wordCount: 212,
    text: `When a high-severity production outage disrupts customer operations, an organization's long-term reliability depends on how it conducts its post-incident review. In traditional punitive cultures, management seeks to identify which individual engineer executed the faulty command. However, reprimanding human operators inevitably incentivizes engineers to conceal near-misses and withhold critical diagnostic context during future incidents.

High-performing Site Reliability Engineering (SRE) teams enforce a strictly "blameless postmortem" methodology. A blameless postmortem assumes that every engineer involved acted with the best intentions based on the telemetry and tooling available to them at that moment. Instead of asking *who* caused the outage, the review asks *why* the deployment pipeline permitted a defective configuration to reach production without triggering automated safeguards.

By applying the "Five Whys" root-cause analysis technique, teams trace human errors back to systemic gaps—such as ambiguous runbook documentation, missing canary health checks, or alert fatigue. Every postmortem must conclude with prioritized, time-bound engineering action items, such as implementing automated schema validation, ensuring that the same class of failure can never recur.`
  },
  'txt-domain33-proc': {
    id: 'txt-domain33-proc',
    title: 'Standard Operating Procedure: Production Relational Database Schema Migration',
    topic: 'V08',
    wordCount: 228,
    text: `To ensure zero data corruption during the quarterly customer billing schema update, the database reliability engineering team published the following sequence of standard operating procedures:

Step 1: Forty-five minutes prior to deployment, the change coordinator posts an operational notice in the corporate incident and release Slack channel.
Step 2: The infrastructure operator enables maintenance mode on the public ingress load balancers, returning HTTP 503 Service Unavailable to new external client requests.
Step 3: The database administrator executes the automated DDL script to add partitioned foreign keys and drop deprecated customer index tables.
Step 4: The application deployment pipeline restarts all backend microservice worker pools against the updated database schema.
Step 5: The QA lead runs automated synthetic smoke tests against staging endpoints to verify transactional integrity.

During the post-deployment audit, however, the lead compliance officer flagged a catastrophic procedural vulnerability in the runbook. While the procedure meticulously covers user notifications and service draining, it completely omits the mandatory pre-migration backup validation. Crucially, the operators did not generate a point-in-time storage snapshot immediately before altering tables, nor did the runbook specify an automated rollback script in the event of an unrecoverable DDL syntax crash. Furthermore, the protocol failed to identify the designated escalation engineer who holds emergency superuser privileges if the database lock table deadlocks during partition changes.`
  },

  // Official-format practice sets (rdg-01 … rdg-10)
  ...READING_SET_1_TEXTS,
  ...READING_SET_2_TEXTS
};


