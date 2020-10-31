<template>
    <div class="accordion" role="tablist">
        <b-card no-body class="mb-1" v-for="(values, key) in getDisciplines()" :key="key">
            <b-card-header header-tag="header" v-b-toggle:[key] class="accordion-header p-1" role="tab">
                {{ key }} {{ test }}
            </b-card-header>
            <b-collapse :id="key" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-form-group>
                        <b-form-checkbox
                            v-for="value in values"
                            v-model="selected"
                            :key="value"
                            :value="value"
                            :name="value"
                        >
                            {{ value }}
                        </b-form-checkbox>
                    </b-form-group>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import disciplines from '@/settings/disciplines';

export default class TopicList extends Vue {
    @Prop(String) readonly accordionName?: string;

    props = [
        "test"
    ]

    private selected: string[] = [];

    private getDisciplines() {
        return disciplines;
    }
}

</script>

<style lang="scss">
.accordion-header {
    text-align: center;
    cursor: pointer;
}
</style>