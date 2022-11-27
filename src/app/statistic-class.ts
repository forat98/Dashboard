

export interface DataStatistic{
    totalBookings: number,
    totalUpcomingBookings: number,
    totalOngoingBookings: number,
    totalCompletedBookings: number,
    totalRevenues: number,
    totalReceivables: number,
    totalPayables: number,
    totalWorkshops: number,
    totalEnabledWorkshops: number,
    totalDisabledWorkshops: number,
    totalPublishedWorkshops: number,
    totalInstructors: number,
    totalEnabledApprovedInstructors: number,
    totalDisabledApprovedInstructors: number,
    totalPendingInstructors: number,
    totalClients: number,
    totalEngagementRequests: number,
    totalApprovedEngagementRequests: number,
    totalPendingEngagementRequests: number,
    totalSuggestionRequests: number,
    topRevenueWorkshops:topRevenueWorkshops[] ,
    topRatedInstructors: topRatedInstructors[]

  }

export interface topRevenueWorkshops{
    id: number,
    workshopName: string
}

export interface topRatedInstructors{
  id:number ,
  imageId: 211,
  imageUrl:string ,
  firstName: string,
  lastName: string,
  profession: string}

export class StatisticDTO  {
  totalUpcomingBookings: any;
  totalCompletedBookings: any;
  totalOngoingBookings:any;
   totalBookings: number;
  totalRevenues: number;
   totalReceivables: number;
  totalPayables: number;
   totalWorkshops: number;
   totalPendingEngagementRequests: number;
  totalSuggestionRequests: number;
  totalApprovedEngagementRequests: number;
  totalEngagementRequests: number;
  totalDisabledWorkshops: number;
  totalEnabledWorkshops: number;
  totalPublishedWorkshops: number;
  totalInstructors: number;
  totalEnabledApprovedInstructors: number;
  totalDisabledApprovedInstructors: number;
  totalPendingInstructors: number;
  totalClients: number;
  topRevenueWorkshops: topRevenueWorkshops[];
  topRatedInstructors: topRatedInstructors[];


  constructor(data:DataStatistic ) {
    this.totalUpcomingBookings=data.totalUpcomingBookings
    this.totalOngoingBookings=data.totalOngoingBookings
    this.totalCompletedBookings=data.totalCompletedBookings
    this.totalBookings=data.totalBookings
    this.totalRevenues= data.totalRevenues
    this.totalReceivables= data.totalReceivables
    this.totalPayables=data.totalPayables
    this. totalWorkshops=data.totalWorkshops
    this.totalEnabledWorkshops=data.totalEnabledWorkshops
    this.totalDisabledWorkshops= data.totalDisabledWorkshops
    this. totalPublishedWorkshops= data.totalPublishedWorkshops
    this.totalInstructors =data.totalInstructors
    this.totalEnabledApprovedInstructors=data.totalEnabledApprovedInstructors
    this. totalDisabledApprovedInstructors=data.totalDisabledApprovedInstructors
    this.totalPendingInstructors=data.totalPendingInstructors
    this. totalClients=data.totalClients,
    this.totalEngagementRequests=data.totalEngagementRequests
    this. totalApprovedEngagementRequests=data.totalApprovedEngagementRequests
    this.totalPendingEngagementRequests=data.totalPendingEngagementRequests
    this.totalSuggestionRequests=data.totalSuggestionRequests
    this.topRevenueWorkshops=data.topRevenueWorkshops
    this.topRatedInstructors=data.topRatedInstructors
  }

   result(){
    return {
     booking: [{ totalUpcomingBookings: this.totalUpcomingBookings,
              totalOngoingBookings:this.totalOngoingBookings,
              totalCompletedBookings:this.totalCompletedBookings
            }],
    Workshops: [{

                totalDisabledWorkshops: this.totalDisabledWorkshops,
                totalEnabledWorkshops: this.totalEnabledWorkshops,
                totalPublishedWorkshops: this.totalPublishedWorkshops
              }]
    }
  }

}


