 CREATE TABLE [dbo].[ProductInfo](
	[ProductRowId] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [varchar](100) NOT NULL,
	[ProductName] [varchar](200) NOT NULL,
	[CategoryName] [varchar](100) NOT NULL,
	[Manufacturer] [varchar](200) NOT NULL,
	[Description] [varchar](400) NOT NULL,
	[BasePrice] [int] NOT NULL
) 