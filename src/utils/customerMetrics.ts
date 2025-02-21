/**
 * A library of functions for calculating various call center metrics,
 * along with their names and descriptions.
 */
const callCenterMetrics = {
  AHT: {
    name: "Average Handle Time (AHT)",
    description:
      "The average time an agent spends handling a call (talk time, hold time, and after‐call work).",
    calculate: (
      totalTalkTime: number,
      totalHoldTime: number,
      totalAfterCallWorkTime: number,
      numberOfCallsHandled: number
    ): number => {
      if (numberOfCallsHandled === 0) {
        return 0;
      }
      return (
        (totalTalkTime + totalHoldTime + totalAfterCallWorkTime) /
        numberOfCallsHandled
      );
    },
  },
  FCR: {
    name: "First Call Resolution (FCR)",
    description:
      "The percentage of customer calls resolved on the first contact without follow-up.",
    calculate: (
      numberOfCallsResolvedOnFirstContact: number,
      totalNumberOfCalls: number
    ): number => {
      if (totalNumberOfCalls === 0) {
        return 0;
      }
      return (numberOfCallsResolvedOnFirstContact / totalNumberOfCalls) * 100;
    },
  },
  ServiceLevel: {
    name: "Service Level",
    description:
      "The percentage of calls answered within a predefined threshold (e.g., 20 seconds).",
    calculate: (
      numberOfCallsAnsweredWithinThreshold: number,
      totalIncomingCalls: number
    ): number => {
      if (totalIncomingCalls === 0) {
        return 0;
      }
      return (numberOfCallsAnsweredWithinThreshold / totalIncomingCalls) * 100;
    },
  },
  AbandonmentRate: {
    name: "Abandonment Rate",
    description:
      "The percentage of callers who hang up before reaching an agent.",
    calculate: (
      numberOfAbandonedCalls: number,
      totalIncomingCalls: number
    ): number => {
      if (totalIncomingCalls === 0) {
        return 0;
      }
      return (numberOfAbandonedCalls / totalIncomingCalls) * 100;
    },
  },
  OccupancyRate: {
    name: "Occupancy Rate",
    description:
      "The percentage of time agents are actively handling calls versus idle time.",
    calculate: (
      totalTimeOnCalls: number,
      totalLoggedInTime: number
    ): number => {
      if (totalLoggedInTime === 0) {
        return 0;
      }
      return (totalTimeOnCalls / totalLoggedInTime) * 100;
    },
  },
  AgentUtilization: {
    name: "Agent Utilization",
    description:
      "The percentage of scheduled time that agents spend on call-related activities.",
    calculate: (
      totalTimeOnCalls: number,
      afterCallWorkTime: number,
      totalScheduledTime: number
    ): number => {
      if (totalScheduledTime === 0) {
        return 0;
      }
      return (
        ((totalTimeOnCalls + afterCallWorkTime) / totalScheduledTime) * 100
      );
    },
  },
  CSAT: {
    name: "Customer Satisfaction Score (CSAT)",
    description: "A measure of customer satisfaction immediately after a call.",
    calculate: (
      sumOfCSATRatings: number,
      totalNumberOfResponses: number
    ): number => {
      if (totalNumberOfResponses === 0) {
        return 0;
      }
      return (sumOfCSATRatings / totalNumberOfResponses) * 100;
    },
  },
  NPS: {
    name: "Net Promoter Score (NPS)",
    description:
      "A measure of customer loyalty, calculated as the difference between promoters and detractors.",
    calculate: (
      promotersPercentage: number,
      detractorsPercentage: number
    ): number => {
      return promotersPercentage - detractorsPercentage;
    },
  },
  ASA: {
    name: "Average Speed of Answer (ASA)",
    description: "The average time it takes to answer incoming calls.",
    calculate: (
      totalWaitTimeForAnsweredCalls: number,
      numberOfAnsweredCalls: number
    ): number => {
      if (numberOfAnsweredCalls === 0) {
        return 0;
      }
      return totalWaitTimeForAnsweredCalls / numberOfAnsweredCalls;
    },
  },
  CallQualityScore: {
    name: "Call Quality Score",
    description:
      "An evaluation of how well agents perform on calls according to quality standards.",
    calculate: (
      sumOfQualityScores: number,
      numberOfCallsEvaluated: number
    ): number => {
      if (numberOfCallsEvaluated === 0) {
        return 0;
      }
      return sumOfQualityScores / numberOfCallsEvaluated;
    },
  },
  TransferRate: {
    name: "Transfer Rate",
    description:
      "The percentage of calls that are transferred to another agent or department.",
    calculate: (
      numberOfTransferredCalls: number,
      totalCallsHandled: number
    ): number => {
      if (totalCallsHandled === 0) {
        return 0;
      }
      return (numberOfTransferredCalls / totalCallsHandled) * 100;
    },
  },
  EscalationRate: {
    name: "Escalation Rate",
    description:
      "The percentage of calls that require escalation to higher-level support.",
    calculate: (
      numberOfEscalatedCalls: number,
      totalCallsHandled: number
    ): number => {
      if (totalCallsHandled === 0) {
        return 0;
      }
      return (numberOfEscalatedCalls / totalCallsHandled) * 100;
    },
  },
  AverageAfterCallWorkTime: {
    name: "Average After-Call Work Time",
    description: "The average time agents spend on wrap-up tasks after a call.",
    calculate: (
      totalAfterCallWorkTime: number,
      totalCallsHandled: number
    ): number => {
      if (totalCallsHandled === 0) {
        return 0;
      }
      return totalAfterCallWorkTime / totalCallsHandled;
    },
  },
  RepeatCallRate: {
    name: "Repeat Call Rate",
    description:
      "The percentage of customers who must call back regarding the same issue.",
    calculate: (numberOfRepeatCalls: number, totalCalls: number): number => {
      if (totalCalls === 0) {
        return 0;
      }
      return (numberOfRepeatCalls / totalCalls) * 100;
    },
  },
  AgentAdherenceToSchedule: {
    name: "Agent Adherence to Schedule",
    description:
      "The percentage of time agents stick to their assigned schedules.",
    calculate: (
      timeAgentsAdheringToSchedule: number,
      totalScheduledTime: number
    ): number => {
      if (totalScheduledTime === 0) {
        return 0;
      }
      return (timeAgentsAdheringToSchedule / totalScheduledTime) * 100;
    },
  },
  AgentTurnoverRate: {
    name: "Agent Turnover Rate",
    description:
      "The percentage of agents leaving the call center during a given period.",
    calculate: (
      numberOfAgentsWhoLeft: number,
      averageNumberOfAgents: number
    ): number => {
      if (averageNumberOfAgents === 0) {
        return 0;
      }
      return (numberOfAgentsWhoLeft / averageNumberOfAgents) * 100;
    },
  },
  CostPerCall: {
    name: "Cost per Call",
    description: "The average cost incurred for handling each call.",
    calculate: (
      totalCallCenterOperatingCosts: number,
      totalNumberOfCallsHandled: number
    ): number => {
      if (totalNumberOfCallsHandled === 0) {
        return 0;
      }
      return totalCallCenterOperatingCosts / totalNumberOfCallsHandled;
    },
  },
  CostPerResolution: {
    name: "Cost per Resolution",
    description: "The average cost incurred for resolving a customer issue.",
    calculate: (
      totalOperatingCosts: number,
      numberOfResolvedCases: number
    ): number => {
      if (numberOfResolvedCases === 0) {
        return 0;
      }
      return totalOperatingCosts / numberOfResolvedCases;
    },
  },
  AverageWaitTime: {
    name: "Average Wait Time",
    description:
      "The average time a customer waits in the queue before the call is answered.",
    calculate: (
      totalWaitTimeForAllCalls: number,
      totalNumberOfCalls: number
    ): number => {
      if (totalNumberOfCalls === 0) {
        return 0;
      }
      return totalWaitTimeForAllCalls / totalNumberOfCalls;
    },
  },
  CallAbandonmentTime: {
    name: "Call Abandonment Time",
    description: "The average wait time before a caller abandons the call.",
    calculate: (
      totalWaitTimeOfAbandonedCalls: number,
      numberOfAbandonedCalls: number
    ): number => {
      if (numberOfAbandonedCalls === 0) {
        return 0;
      }
      return totalWaitTimeOfAbandonedCalls / numberOfAbandonedCalls;
    },
  },
  AgentSatisfactionScore: {
    name: "Agent Satisfaction Score",
    description: "A measure of agent satisfaction based on survey feedback.",
    calculate: (
      sumOfAgentSatisfactionScores: number,
      numberOfAgentResponses: number
    ): number => {
      if (numberOfAgentResponses === 0) {
        return 0;
      }
      return sumOfAgentSatisfactionScores / numberOfAgentResponses;
    },
  },
  AverageCallDuration: {
    name: "Average Call Duration",
    description: "The average length of a call from start to finish.",
    calculate: (
      totalCallDuration: number,
      totalNumberOfCalls: number
    ): number => {
      if (totalNumberOfCalls === 0) {
        return 0;
      }
      return totalCallDuration / totalNumberOfCalls;
    },
  },
  CallResolutionRate: {
    name: "Call Resolution Rate",
    description: "The percentage of calls that are successfully resolved.",
    calculate: (
      numberOfResolvedCalls: number,
      totalCallsHandled: number
    ): number => {
      if (totalCallsHandled === 0) {
        return 0;
      }
      return (numberOfResolvedCalls / totalCallsHandled) * 100;
    },
  },
  IVRContainmentRate: {
    name: "IVR Containment Rate",
    description:
      "The percentage of calls handled completely by the Interactive Voice Response system.",
    calculate: (
      numberOfCallsResolvedViaIVR: number,
      totalIncomingCalls: number
    ): number => {
      if (totalIncomingCalls === 0) {
        return 0;
      }
      return (numberOfCallsResolvedViaIVR / totalIncomingCalls) * 100;
    },
  },
  CallbackCompletionRate: {
    name: "Callback Completion Rate",
    description:
      "The percentage of callback requests that are completed successfully.",
    calculate: (
      numberOfCompletedCallbacks: number,
      totalCallbackRequests: number
    ): number => {
      if (totalCallbackRequests === 0) {
        return 0;
      }
      return (numberOfCompletedCallbacks / totalCallbackRequests) * 100;
    },
  },
  HoldTimeRatio: {
    name: "Hold Time Ratio",
    description: "The ratio of hold time to the total call duration.",
    calculate: (totalHoldTime: number, totalCallDuration: number): number => {
      if (totalCallDuration === 0) {
        return 0;
      }
      return totalHoldTime / totalCallDuration;
    },
  },
  ScriptComplianceRate: {
    name: "Script Compliance Rate",
    description:
      "The percentage of calls in which agents follow the prescribed script.",
    calculate: (
      numberOfCallsWithScriptCompliance: number,
      totalCallsMonitored: number
    ): number => {
      if (totalCallsMonitored === 0) {
        return 0;
      }
      return (numberOfCallsWithScriptCompliance / totalCallsMonitored) * 100;
    },
  },
  AbandonedCallRateThreshold: {
    name: "Abandoned Call Rate (Threshold)",
    description:
      "The percentage of calls abandoned after exceeding a specific wait time threshold.",
    calculate: (
      numberOfCallsAbandonedAfterThreshold: number,
      totalIncomingCalls: number
    ): number => {
      if (totalIncomingCalls === 0) {
        return 0;
      }
      return (numberOfCallsAbandonedAfterThreshold / totalIncomingCalls) * 100;
    },
  },
  CallTransferSuccessRate: {
    name: "Call Transfer Success Rate",
    description:
      "The percentage of transferred calls that result in a successful resolution.",
    calculate: (
      numberOfSuccessfulTransfers: number,
      totalTransferredCalls: number
    ): number => {
      if (totalTransferredCalls === 0) {
        return 0;
      }
      return (numberOfSuccessfulTransfers / totalTransferredCalls) * 100;
    },
  },
  SupervisorEscalationRate: {
    name: "Supervisor Escalation Rate",
    description: "The percentage of calls escalated to a supervisor.",
    calculate: (
      numberOfCallsEscalatedToSupervisor: number,
      totalCallsHandled: number
    ): number => {
      if (totalCallsHandled === 0) {
        return 0;
      }
      return (numberOfCallsEscalatedToSupervisor / totalCallsHandled) * 100;
    },
  },
  RepeatContactRate: {
    name: "Repeat Contact Rate",
    description:
      "The percentage of customers who need to contact the center more than once for the same issue.",
    calculate: (
      numberOfRepeatContacts: number,
      totalCustomerContacts: number
    ): number => {
      if (totalCustomerContacts === 0) {
        return 0;
      }
      return (numberOfRepeatContacts / totalCustomerContacts) * 100;
    },
  },
  AgentErrorRate: {
    name: "Agent Error Rate",
    description: "The percentage of calls in which agents make errors.",
    calculate: (
      numberOfCallsWithErrors: number,
      totalCallsHandled: number
    ): number => {
      if (totalCallsHandled === 0) {
        return 0;
      }
      return (numberOfCallsWithErrors / totalCallsHandled) * 100;
    },
  },
  RevenuePerCall: {
    name: "Revenue per Call",
    description:
      "The average revenue generated per call (useful in sales environments).",
    calculate: (
      totalRevenueGenerated: number,
      totalNumberOfCalls: number
    ): number => {
      if (totalNumberOfCalls === 0) {
        return 0;
      }
      return totalRevenueGenerated / totalNumberOfCalls;
    },
  },
  UpsellCrossSellConversionRate: {
    name: "Upsell/Cross-sell Conversion Rate",
    description:
      "The percentage of calls that lead to upsell or cross-sell opportunities.",
    calculate: (
      numberOfUpsellCrossSellConversions: number,
      totalCallsWithUpsellOpportunities: number
    ): number => {
      if (totalCallsWithUpsellOpportunities === 0) {
        return 0;
      }
      return (
        (numberOfUpsellCrossSellConversions /
          totalCallsWithUpsellOpportunities) *
        100
      );
    },
  },
  ComplianceRate: {
    name: "Compliance Rate",
    description:
      "The percentage of calls that meet regulatory or internal standards.",
    calculate: (
      numberOfCompliantCalls: number,
      totalCallsEvaluated: number
    ): number => {
      if (totalCallsEvaluated === 0) {
        return 0;
      }
      return (numberOfCompliantCalls / totalCallsEvaluated) * 100;
    },
  },
  AbandonedCallRecoveryRate: {
    name: "Abandoned Call Recovery Rate",
    description: "The percentage of abandoned calls that are later recovered.",
    calculate: (
      numberOfRecoveredAbandonedCalls: number,
      totalAbandonedCalls: number
    ): number => {
      if (totalAbandonedCalls === 0) {
        return 0;
      }
      return (numberOfRecoveredAbandonedCalls / totalAbandonedCalls) * 100;
    },
  },
  AgentShrinkageRate: {
    name: "Agent Shrinkage Rate",
    description:
      "The percentage of scheduled time lost due to breaks, training, or absenteeism.",
    calculate: (
      totalShrinkageTime: number,
      totalScheduledAgentTime: number
    ): number => {
      if (totalScheduledAgentTime === 0) {
        return 0;
      }
      return (totalShrinkageTime / totalScheduledAgentTime) * 100;
    },
  },
  CallDistributionRate: {
    name: "Call Distribution Rate",
    description:
      "The percentage distribution of calls handled by individual agents or teams.",
    calculate: (
      numberOfCallsHandledByAgent: number,
      totalCallsHandled: number
    ): number => {
      if (totalCallsHandled === 0) {
        return 0;
      }
      return (numberOfCallsHandledByAgent / totalCallsHandled) * 100;
    },
  },
};

export default callCenterMetrics;
