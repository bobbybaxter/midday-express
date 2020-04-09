USE [local_kanban]
GO

/****** Object:  Table [dbo].[Card]    Script Date: 4/2/2020 10:28:17 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Card](
	[Id] [bigint] NOT NULL,
	[Version] [int] NOT NULL,
	[Title] [nvarchar](255) NULL,
	[Description] [nvarchar](max) NULL,
	[TypeId] [bigint] NOT NULL,
	[Active] [bit] NULL,
	[Size] [int] NULL,
	[IsBlocked] [bit] NULL,
	[BlockReason] [nvarchar](255) NULL,
	[CreatedOn] [datetime] NULL,
	[DueDate] [datetime] NULL,
	[Priority] [int] NULL,
	[Index] [int] NULL,
	[LaneId] [bigint] NULL,
	[IsDeleted] [bit] NOT NULL,
	[ExternalSystemUrl] [nvarchar](2000) NULL,
	[ExternalSystemName] [nvarchar](255) NULL,
	[ClassOfServiceId] [bigint] NULL,
	[ExternalCardID] [nvarchar](50) NULL,
	[Tags] [nvarchar](2000) NULL,
	[CurrentTaskBoardId] [bigint] NULL,
	[DrillThroughBoardId] [bigint] NULL,
	[ParentCardId] [bigint] NULL,
	[BlockStateChangeDate] [datetime] NULL,
	[LastMove] [datetime] NULL,
	[AttachmentsCount] [int] NULL,
	[LastAttachment] [datetime] NULL,
	[CommentsCount] [int] NULL,
	[LastComment] [datetime] NULL,
	[DrillThroughProgressPercentage] [int] NULL,
	[DrillThroughProgressComplete] [int] NULL,
	[DrillThroughProgressTotal] [int] NULL,
	[DateArchived] [datetime] NULL,
	[LastActivity] [datetime] NULL,
	[StartDate] [datetime] NULL,
	[DrillThroughProgressSizeTotal] [bigint] NULL,
	[DrillThroughProgressSizeComplete] [bigint] NULL,
	[ActualStartDate] [datetime] NULL,
	[ActualFinishDate] [datetime] NULL,
	[ComputedExternalCardIDTitle]  AS ((isnull([ExternalCardID],'')+'|')+isnull([Title],'')),
	[OrganizationId] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Card] ADD  DEFAULT ((0)) FOR [DrillThroughProgressPercentage]
GO

ALTER TABLE [dbo].[Card]  WITH NOCHECK ADD  CONSTRAINT [FK2D6D4574606A05A6] FOREIGN KEY([ClassOfServiceId])
REFERENCES [dbo].[ClassOfService] ([Id])
GO

ALTER TABLE [dbo].[Card] CHECK CONSTRAINT [FK2D6D4574606A05A6]
GO

ALTER TABLE [dbo].[Card]  WITH NOCHECK ADD  CONSTRAINT [FK2D6D4574DE221D04] FOREIGN KEY([LaneId])
REFERENCES [dbo].[Lane] ([Id])
GO

ALTER TABLE [dbo].[Card] CHECK CONSTRAINT [FK2D6D4574DE221D04]
GO

ALTER TABLE [dbo].[Card]  WITH NOCHECK ADD  CONSTRAINT [FK2D6D4574DEE510A] FOREIGN KEY([TypeId])
REFERENCES [dbo].[CardTypes] ([Id])
GO

ALTER TABLE [dbo].[Card] CHECK CONSTRAINT [FK2D6D4574DEE510A]
GO