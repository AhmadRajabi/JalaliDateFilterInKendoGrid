# JalaliDateFilterInKendoGrid

![alt text](https://github.com/AhmadRajabi/JalaliDateFilterInKendoGrid/blob/master/screen.png)

How to use:

```javascript
 $("#grid").kendoGrid({
            dataSource: {
                data: products,
                schema: {
                    model: {
                        fields: {
                            ProductName: { 
                                type: "string" 
                            },                        
                            Date: {
                                type: "date",
                                parse: function (value) { return value; }
                            },                              
                        }
                    }
                },
                pageSize: 20
            },
            height: 550,
            scrollable: true,
            sortable: true,
            filterable: true,
            pageable: {
                input: true,
                numeric: false
            },
            columns: [
                {
                    field: "ProductName",
                    title: "Product Name",       
                },
                {
                    field: "Date",
                    title: "Last Update", 
                    filterable: persianDateFilter
                }
            ]
        });
 ```
        
