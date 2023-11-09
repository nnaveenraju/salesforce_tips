+  childProps = { showItemEdit: false, showItemView: false,  itemRecordId: ''};
 
   handleNewClick() {
-    this.template.querySelector("c-connexa-a-e-m-p-new-item").openModal();
+    this.showItemEdit = false;
+    this.showItemView = false;
+   
     //Setup properties and call a JS method annotated as @Api on the model class.
     this.childProps = { showFirstNext: true, showAdd: true, showItemEdit: false, showItemView: false,  itemRecordId: ''};

     //the following will call the line 21 below ( which will be the model LWC)
+    this.template.querySelector("c-connexa-a-e-m-p-new-item").openViewOrEditFromParent(this.childProps);
+    this.openModal();
   }



//Child model funtion.

  @api
  openViewOrEditFromParent(childPropsParam) {
    this.showFirstNext = childPropsParam.showFirstNext;
    this.showAdd = childPropsParam.showAdd;

    this.showItemEdit = childPropsParam.showItemEdit ;
    this.showItemView = childPropsParam.showItemView;
    this.itemRecordId = childPropsParam.itemRecordId;

    console.log('this.showItemEdit: ' + this.showItemEdit);
    console.log('this.showItemView: ' + this.showItemView);
  }
