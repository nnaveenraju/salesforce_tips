
# Find out a fields in the org..
SELECT Id,TableEnumOrId,DeveloperName,EntityDefinition.Label, ManageableState, NamespacePrefix  FROM CustomField WHERE DeveloperName like '%Customer%' and ManageableState = 'unmanaged'
