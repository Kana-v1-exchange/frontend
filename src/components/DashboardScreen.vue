<template>
    <div class="wrapper">
        <a-row type="flex" justify="space-around" align="middle" class="row">
            <a-col :span="8" class="col">
                <div class="height-100 oneEl">
                    Markets
                    <a-table :columns="columns" :pagination="false" :data-source="data" class="ant-table-striped height-80"
                        :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-even' : 'table-odd')"
                        :scroll="{ x: 200, y: 190 }" />

                </div>
            </a-col>
            <a-col :span="8" class="col">
                <div class="oneEl">Amount Story</div>
            </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle" class="row">
            <a-col :span="8" class="col">
                <div class="height-100 oneEl">Balances</div>
            </a-col>
            <a-col :span="8" class="col">
                <div class="oneEl">Trade history</div>
            </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle" class="row">
            <a-col :span="8" class="col">
                <div class="oneEl"> Buy</div>
            </a-col>
            <a-col :span="8" class="col">
                <div class="oneEl">Sell</div>
            </a-col>
        </a-row>
    </div>
</template>


<script>
export default {

    data() {
        return {
            currencies: new Map().set("USD", 12),
            columns: [
                {
                    title: 'Currency',
                    dataIndex: 'currency'
                },
                {
                    title: 'Value',
                    dataIndex: 'value'
                },
                {
                    title: 'Amount',
                    dataIndex: 'amount'
                },
                {
                    title: 'Change',
                    dataIndex: 'change'
                },
            ],
            data: [
                {
                    currency: 'USD',
                    value: 1,
                    amount: 100,
                    change: 1
                },
                {
                    currency: 'AUD',
                    value: 2,
                    amount: 5420,
                    change: -0.96
                },
                {
                    currency: 'TAR',
                    value: 0.345,
                    amount: 125124,
                    change: 0.425
                },
                {
                    currency: 'KRN',
                    value: 1.34,
                    amount: 78512,
                    change: 0.597
                },
                {
                    currency: 'LOU',
                    value: 5.2,
                    amount: 124124124,
                    change: 1.2
                },
                {
                    currency: 'QOB',
                    value: 0.012,
                    amount: 1231231231968,
                    change: -0.124124
                },
            ],

        }
    }
}
</script>

<style>
.wrapper {
    height: 100%;
    width: 100%;
    background-color: #2e2e38;
}

.wrapper .oneEl {
    color: #1e6db8;
    border: 1px solid #31313b;
    background-color: #31313b;
}


.oneEl {
    border-radius: 12px;
    height: 100%;
    width: 80%;
    text-align: center;
}

.row {
    height: 30%;
    padding-top: 20px;
}

.col {
    height: 100%;
}

.ant-table-striped {
    width: 100%;
    height: 100%;
    background-color: #31313b;
    color: #1e6db8;
}



.ant-table-striped :deep(.table-even) td {
    background-color: #31313b;
}

.ant-table-striped :deep(.table-odd) td {
    background-color: #434352;
}

.ant-table-striped .ant-table-thead>tr>th {
    background: #31313b;
    color: #1e6db8;
    border: none;
}

.oneEl .ant-table-striped {
    height: 90%;
}

.oneEl .ant-table-striped .ant-spin-nested-loading {
    height: 100%;
}

.oneEl .ant-table-striped .ant-spin-nested-loading  .ant-spin-container .ant-table {
    height: 100%;
}

.ant-table-striped .ant-table-thead>tr>td {
    background: #31313b;
    color: #1e6db8;
    border: none;
}


.ant-table-striped .ant-table {
    background: #31313b;
    color: white;
}

.ant-table-striped .ant-table-tbody>tr>td {
    border: none;
}


.ant-table-tbody > tr.ant-table-row:hover > td, .ant-table-cell-row-hover {
    background: none !important;
}


.ant-table-striped .ant-table-body .ant-table-tbody > .table-odd {
    background: #434352;
}

tr {
    background-color: #31313b;
}
</style>