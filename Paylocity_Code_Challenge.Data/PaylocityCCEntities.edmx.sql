
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 05/04/2015 13:30:28
-- Generated from EDMX file: C:\Users\Tony McLaughlin\Documents\Web\Clients\Business\Paylocity_Code_Challenge\Paylocity_Code_Challenge.Data\PaylocityCCEntities.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [paylocity_test];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'UserAccounts'
CREATE TABLE [dbo].[UserAccounts] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [FirstName] nvarchar(max)  NOT NULL,
    [LastName] nvarchar(max)  NOT NULL,
    [DependentCount] nvarchar(max)  NOT NULL,
    [BenefitTotalCost] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Dependents'
CREATE TABLE [dbo].[Dependents] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [FirstName] nvarchar(max)  NOT NULL,
    [LastName] nvarchar(max)  NOT NULL,
    [UserAccountId] int  NOT NULL
);
GO

-- Creating table 'BenefitsCosts'
CREATE TABLE [dbo].[BenefitsCosts] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [EmployeeBenefit] nvarchar(max)  NOT NULL,
    [DependentBenefit] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'UserAccounts'
ALTER TABLE [dbo].[UserAccounts]
ADD CONSTRAINT [PK_UserAccounts]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Dependents'
ALTER TABLE [dbo].[Dependents]
ADD CONSTRAINT [PK_Dependents]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'BenefitsCosts'
ALTER TABLE [dbo].[BenefitsCosts]
ADD CONSTRAINT [PK_BenefitsCosts]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [UserAccountId] in table 'Dependents'
ALTER TABLE [dbo].[Dependents]
ADD CONSTRAINT [FK_DependentsUserAccount]
    FOREIGN KEY ([UserAccountId])
    REFERENCES [dbo].[UserAccounts]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DependentsUserAccount'
CREATE INDEX [IX_FK_DependentsUserAccount]
ON [dbo].[Dependents]
    ([UserAccountId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------