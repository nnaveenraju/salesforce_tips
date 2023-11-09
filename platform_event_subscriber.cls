// adjust the subscriber consumtion rate:
/*
# To configure the platform event processing size, run the following on workbench:
Post:
/services/data/v57.0/tooling/sobjects/PlatformEventSubscriberConfig
{
    "BatchSize": "5",
    "DeveloperName":"Sharing_Cal_Limit_Size",
    "MasterLabel":"Sharing_Cal_Limit_Size",
    "PlatformEventConsumerId": "01q7E0000******"
  
}

# Check the subscriber config for details.
GET:
/services/data/v57.0/tooling/sobjects/PlatformEventSubscriberConfig/3JK5300XXXXXXC

*/
