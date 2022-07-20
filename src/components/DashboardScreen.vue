<template>
    <div class="wrapper">
        <a-row type="flex" justify="space-around" align="middle" class="row">
            <a-col :span="8" class="col">
                <div class="oneEl">
                    <h3>MARKETS</h3>
                    <a-table :columns="marketColumns" :pagination="false" :data-source="marketData"
                        class="ant-table-striped"
                        :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-even' : 'table-odd')"
                        :scroll="{ x: 200, y: 190 }">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.dataIndex === 'change'">
                                <span :style="record.change[0] === '+' ? 'color: #469676' : 'color: #E84E51'">{{
                                        record.change
                                }}</span>
                            </template>

                        </template>
                    </a-table>
                </div>
            </a-col>
            <a-col :span="8" class="col">
                <div class="oneEl">
                    <h3>TRADE HISTORY</h3>
                    <a-table :columns="tradeHistoryColumns" :pagination="false" :data-source="tradeHistoryData"
                        class="ant-table-striped"
                        :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-even' : 'table-odd')"
                        :scroll="{ x: 200, y: 190 }">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.dataIndex === 'amount'">
                                <span v-if="record.amount > 0" style="color: green;"> &uarr; </span>
                                <span v-if="record.amount < 0" style="color: red;"> &darr; </span>
                                <span>{{ record.amount }}</span>
                            </template>
                        </template>
                    </a-table>
                </div>
            </a-col>

            <a-col :span="4" class="col">
                <div class="oneEl">
                    <div class="header">
                        <h3>BALANCES</h3>
                        <a-avatar :size="30" style="background-color: #434352" @click="showModal">
                            <template #icon>
                                <UserOutlined />
                            </template>
                        </a-avatar>
                        <a-modal v-model:visible="visible" style="width: 200px; height: 200px;" centered>
                            <template #footer ></template>
                            <div class="btn modalBtn">
                                <a-button type="primary" shape="round" :size="size">
                                    Change account
                                </a-button>
                            </div>
                            <div class="btn modalBtn">
                                <a-button type="primary" shape="round" :size="size">
                                    Sign out
                                </a-button>
                            </div>
                        </a-modal>
                    </div>
                    <a-table :columns="balanceColumns" :pagination="false" :data-source="balanceValue"
                        class="ant-table-striped"
                        :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-even' : 'table-odd')"
                        :scroll="{ x: 200, y: 190 }">
                    </a-table>
                </div>
            </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle" class="row">
            <a-col :span="6" class="col">
                <div class="oneEl trade sell">
                    <h3>SELL</h3>
                    <div class="tradeWrapper">
                        <div class="title">
                            <div class="tradeChild">
                                <div class="name">Amount</div>
                                <div class="input">
                                    <a-input v-model:value="amountToSell" class="field" :bordered="false"
                                        placeholder="0">
                                        <template #addonAfter>
                                            <a-select v-model:value="currencyToBuy" :bordered="false" class="select">
                                                <a-select-option v-for="(currency, i) in currencies" :bordered="false"
                                                    :key="i" :value="currency">
                                                    {{ currency }}</a-select-option>
                                            </a-select>
                                        </template>
                                    </a-input>
                                </div>
                            </div>

                            <div class="tradeChild">
                                <div class="name">Price</div>
                                <div class="input">
                                    <a-input v-model:value="sellPrice" class="field" :bordered="false" placeholder="0"
                                        addon-after="USD">
                                    </a-input>
                                </div>
                            </div>
                            <div class="tradeChild">
                                <div class="name">Boundaries</div>
                                <div class="input">
                                    <a-input v-model:value="sellBoundaries" class="field" :bordered="false"
                                        placeholder="0" addon-after="USD">
                                    </a-input>
                                </div>
                            </div>
                            <div class="tradeChild">
                                <div class="name">Total</div>
                                <div class="text">
                                    {{ (amountToSell * (sellPrice - sellBoundaries) >= 0 ? amountToSell * (sellPrice -
                                            sellBoundaries) :
                                            1)
                                    }} USD -
                                    {{ amountToSell * (sellPrice + sellBoundaries) }} USD
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn">
                        <a-button type="primary" shape="round" :size="size">
                            SELL -
                        </a-button>
                    </div>

                </div>
            </a-col>
            <a-col :span="6" class="col">
                <div class="oneEl trade">
                    <h3>BUY</h3>
                    <div class="tradeWrapper">
                        <div class="title">
                            <div class="tradeChild">
                                <div class="name">Amount</div>
                                <div class="input">
                                    <a-input v-model:value="amountToBuy" class="field" :bordered="false"
                                        placeholder="0">
                                        <template #addonAfter>
                                            <a-select v-model:value="currencyToBuy" :bordered="false" class="select">
                                                <a-select-option v-for="(currency, i) in currencies" :bordered="false"
                                                    :key="i" :value="currency">
                                                    {{ currency }}</a-select-option>
                                            </a-select>
                                        </template>
                                    </a-input>
                                </div>
                            </div>

                            <div class="tradeChild">
                                <div class="name">Price</div>
                                <div class="input">
                                    <a-input v-model:value="buyPrice" class="field" :bordered="false" placeholder="0"
                                        addon-after="USD">
                                    </a-input>
                                </div>
                            </div>
                            <div class="tradeChild">
                                <div class="name">Boundaries</div>
                                <div class="input">
                                    <a-input v-model:value="buyBoundaries" class="field" :bordered="false"
                                        placeholder="0" addon-after="USD">
                                    </a-input>
                                </div>
                            </div>
                            <div class="tradeChild">
                                <div class="name">Fee (0,2%)</div>
                                <div class="text">
                                    {{ (amountToBuy * (buyPrice - buyBoundaries) >= 0 ? amountToBuy * (buyPrice -
                                            buyBoundaries) :
                                            1) *
                                            0.002
                                    }} USD -
                                    {{ (amountToBuy * (buyPrice + buyBoundaries)) * 0.002 }} USD
                                </div>
                            </div>
                            <div class="tradeChild">
                                <div class="name">Total</div>
                                <div class="text">
                                    {{ (amountToBuy * (price - boundaries) >= 0 ? amountToBuy * (price - boundaries) :
                                            1)
                                    }} USD -
                                    {{ amountToBuy * (price + boundaries) }} USD
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn">
                        <a-button type="primary" shape="round" :size="size">
                            BUY +
                        </a-button>
                    </div>

                    <div class="info">
                        <div class="input">

                        </div>
                    </div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>


<script>
import { ref } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue';
import {currencies} from '../grpc/handler'
export default {
    components: {
        UserOutlined
    },
    data() {
        currencies()
        
        const visible = ref(false);

        const showModal = () => {
            visible.value = true;
        };

        const handleOk = e => {
            console.log(e);
            visible.value = false;
        };

        return {
            currencies: ['USD', 'AUD', 'TAR', 'KRN', 'LOU'],
            marketColumns: [
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
            marketData: [
                {
                    currency: 'USD',
                    value: 1,
                    amount: 100,
                    change: '+1%'
                },
                {
                    currency: 'AUD',
                    value: 2,
                    amount: 5420,
                    change: '-0.96%'
                },
                {
                    currency: 'TAR',
                    value: 0.345,
                    amount: 125124,
                    change: '+0.425%'
                },
                {
                    currency: 'KRN',
                    value: 1.34,
                    amount: 78512,
                    change: '+0.597%',
                },
                {
                    currency: 'LOU',
                    value: 5.2,
                    amount: 124124124,
                    change: "+1.2%"
                },
                {
                    currency: 'QOB',
                    value: 0.012,
                    amount: 1231231231968,
                    change: '-0.124124%'
                },
            ],

            balanceColumns: [
                {
                    dataIndex: 'currency'
                },
                {
                    dataIndex: 'amount',
                }
            ],

            balanceValue: [
                {
                    currency: 'USD',
                    amount: 100,
                },
                {
                    currency: 'AUD',
                    amount: 5420,
                },
                {
                    currency: 'TAR',
                    amount: 125124,
                },
                {
                    currency: 'KRN',
                    amount: 78512,
                },
                {
                    currency: 'LOU',
                    amount: 124124124,
                },
                {
                    currency: 'QOB',
                    amount: 1231231231968,
                },
            ],
            tradeHistoryColumns: [
                {
                    title: 'Time',
                    dataIndex: 'time'
                },
                {
                    title: 'Currency',
                    dataIndex: 'currency'
                },
                {
                    title: 'Price',
                    dataIndex: 'price'
                },
                {
                    title: 'Amount',
                    dataIndex: 'amount'
                },
            ],

            tradeHistoryData: [
                {
                    time: '2021-10-06 09:14:56',
                    currency: 'AUD',
                    price: 2,
                    amount: 4
                },
                {
                    time: '2021-11-10 21:14:56',
                    currency: 'KRN',
                    price: 1.35,
                    amount: 25
                },
                {
                    time: '2021-10-06 09:14:56',
                    currency: 'LOU',
                    price: 5.2,
                    amount: 12
                },
                {
                    time: '2021-10-06 09:14:56',
                    currency: 'TAR',
                    price: 0.34,
                    amount: -35,
                },
                {
                    time: '2021-10-06 09:14:56',
                    currency: 'KRN',
                    price: 2,
                    amount: -30
                }
            ],

            amountToBuy: ref(0),
            amountToSell: ref(0),
            currencyToBuy: ref('AUD'),
            currencyToSell: ref('AUD'),
            buyPrice: ref(0),
            sellPrice: ref(0),
            buyBoundaries: ref(0.0),
            sellBoundaries: ref(0.0),
            visible,
            showModal,
            handleOk,

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

.oneEl h3 {
    color: #5daaf1;
    position: relative;
    right: 30%;
    top: 5%;
    margin-bottom: 30px;
}

.oneEl .header {
    position: relative;
    top: 5%;
    left: 40%;
    display: flex;
}

.row {
    height: 45%;
    padding-top: 20px;
    margin-bottom: 20px;
}

.col {
    height: 100%;
}

.ant-table-striped {
    background-color: #31313b;
    color: #5daaf1;
}



.ant-table-striped :deep(.table-even) td {
    background-color: #31313b;
}

.ant-table-striped :deep(.table-odd) td {
    background-color: #434352;
}

.ant-table-striped .ant-table-thead>tr>th {
    background: #31313b;
    color: #3490e6;
    border: none;
}

.oneEl .ant-table-striped {
    max-height: 400px;
}

.oneEl .ant-table-striped .ant-spin-nested-loading {
    height: 100%;
}

.oneEl .ant-table-striped .ant-spin-nested-loading .ant-spin-container .ant-table {
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


.ant-table-tbody>tr.ant-table-row:hover>td,
.ant-table-cell-row-hover {
    background: none !important;
}


.ant-table-striped .ant-table-body .ant-table-tbody>.table-odd {
    background: #434352;
}

.ant-table-body {
    max-height: 280px !important;
}

tr {
    background-color: #31313b;
}

.trade .tradeWrapper {
    display: flex;
}

.trade .tradeChild .input {
    border: 1px solid white;
    height: 40px;
    border-radius: 10px;
    width: 50%;
    color: white;
}

.trade .tradeChild .field {
    width: 100%;
    height: 40px;
    margin-top: 3px;
}


.trade .tradeChild .field .select {
    background-color: #31313b;
    color: white;
    border: 0;
}

.ant-select-dropdown {
    background-color: #434352 !important;
    color: white !important;

}


.ant-select-arrow {
    color: white !important;
}

.ant-select-item {
    color: #5daaf1 !important;
}

.tradeChild {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
}

.tradeChild .name {
    margin-left: 20px;
    color: #3490e6;
}

.ant-input {
    color: white !important;
}

.ant-input-group-addon {
    background-color: #31313b !important;
    color: white !important;
    border: 0 !important;
    right: 12px !important;
}

.tradeChild .text {
    color: white;
    text-align: right;
    width: 50%;
    position: relative;
    right: 20px;
    font-size: 15px;
}

.btn {
    position: relative;
    bottom: 10px;
    left: 30%;
}

.sell .btn {
    top: 40px;
}

.modalBtn {
    position: relative;
    top: 30px;
    left: 2px;
    margin-bottom: 20px;
}

.ant-modal-content .ant-modal-footer {
    background-color: #434352 !important;
    border: 0;
}

.ant-modal-content {
    background-color: #434352 !important;
    border: 0;
}
</style>