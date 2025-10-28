<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">LumoUI 组件库测试</h1>
      
      <!-- Button 组件测试 -->
      <section class="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4 text-gray-700">Button 按钮</h2>
        <div class="space-y-4">
          <div class="flex flex-wrap gap-2">
            <LumoButton variant="primary">主要按钮</LumoButton>
            <LumoButton variant="secondary">次要按钮</LumoButton>
            <LumoButton variant="danger">危险按钮</LumoButton>
            <LumoButton variant="success">成功按钮</LumoButton>
          </div>
          <div class="flex flex-wrap gap-2">
            <LumoButton size="sm">小按钮</LumoButton>
            <LumoButton size="md">中按钮</LumoButton>
            <LumoButton size="lg">大按钮</LumoButton>
          </div>
          <div class="flex flex-wrap gap-2">
            <LumoButton :loading="true">加载中</LumoButton>
            <LumoButton disabled>禁用按钮</LumoButton>
            <LumoButton is-circle>圆</LumoButton>
          </div>
        </div>
      </section>

      <!-- Input 组件测试 -->
      <section class="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4 text-gray-700">Input 输入框</h2>
        <div class="space-y-4 max-w-md">
          <LumoInput v-model="inputValue" placeholder="请输入内容" />
          <LumoInput v-model="inputValue" state="success" placeholder="成功状态" />
          <LumoInput v-model="inputValue" state="wrong" placeholder="错误状态" />
          <LumoInput v-model="inputValue" disabled placeholder="禁用状态" />
          <LumoInput v-model="inputValue" searchable placeholder="可搜索" />
          <LumoInput v-model="inputValue" is-round placeholder="圆角样式" />
        </div>
        <p class="mt-2 text-sm text-gray-600">输入值: {{ inputValue }}</p>
      </section>

      <!-- Select 组件测试 -->
      <section class="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4 text-gray-700">Select 选择器</h2>
        <div class="space-y-4 max-w-md">
          <LumoSelect v-model="selectValue" :options="selectOptions" placeholder="请选择" />
          <LumoSelect v-model="selectValue" :options="selectOptions" clearable placeholder="可清空" />
          <LumoSelect :options="selectOptions" disabled placeholder="禁用状态" />
          <LumoSelect v-model="selectValue" :options="selectOptions" is-round placeholder="圆角样式" />
        </div>
        <p class="mt-2 text-sm text-gray-600">选中值: {{ selectValue }}</p>
      </section>

      <!-- Switch 组件测试 -->
      <section class="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4 text-gray-700">Switch 开关</h2>
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <LumoSwitch v-model="switchValue" />
            <span class="text-sm text-gray-600">基础开关: {{ switchValue }}</span>
          </div>
          <div class="flex items-center space-x-4">
            <LumoSwitch v-model="switchValue2" size="sm" />
            <LumoSwitch v-model="switchValue2" size="md" />
            <LumoSwitch v-model="switchValue2" size="lg" />
            <span class="text-sm text-gray-600">不同尺寸</span>
          </div>
          <div class="flex items-center space-x-4">
            <LumoSwitch v-model="switchValue3" active-text="开启" inactive-text="关闭" />
            <span class="text-sm text-gray-600">带文字: {{ switchValue3 }}</span>
          </div>
          <div class="flex items-center space-x-4">
            <LumoSwitch disabled />
            <span class="text-sm text-gray-600">禁用状态</span>
          </div>
        </div>
      </section>

      <!-- Loading 组件测试 -->
      <section class="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4 text-gray-700">Loading 加载</h2>
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <LumoLoading />
            <LumoLoading type="spinner" />
            <span class="text-sm text-gray-600">基础加载</span>
          </div>
          <div class="flex items-center space-x-4">
            <LumoLoading color="#1989fa" />
            <LumoLoading type="spinner" color="#1989fa" />
            <span class="text-sm text-gray-600">自定义颜色</span>
          </div>
          <div class="flex items-center space-x-4">
            <LumoLoading :size="24">加载中...</LumoLoading>
            <LumoLoading type="spinner" :size="24" vertical>请稍候...</LumoLoading>
          </div>
        </div>
      </section>

      <!-- Badge 组件测试 -->
      <section class="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4 text-gray-700">Badge 徽章</h2>
        
        <div class="space-y-6">
          <!-- 基础用法 -->
          <div>
            <h3 class="text-lg font-semibold mb-2">基础用法</h3>
            <div class="flex flex-wrap gap-4">
              <LumoBadge :value="5">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">按钮</div>
              </LumoBadge>
              <LumoBadge :value="10">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">消息</div>
              </LumoBadge>
              <LumoBadge value="Hot">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">热门</div>
              </LumoBadge>
              <LumoBadge :is-dot="true">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">通知</div>
              </LumoBadge>
            </div>
          </div>

          <!-- 最大值 -->
          <div>
            <h3 class="text-lg font-semibold mb-2">最大值</h3>
            <div class="flex flex-wrap gap-4">
              <LumoBadge :value="99" :max="9">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">9+</div>
              </LumoBadge>
              <LumoBadge :value="100" :max="20">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">20+</div>
              </LumoBadge>
              <LumoBadge :value="1000" :max="99">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">99+</div>
              </LumoBadge>
            </div>
          </div>

          <!-- 自定义颜色 -->
          <div>
            <h3 class="text-lg font-semibold mb-2">自定义颜色</h3>
            <div class="flex flex-wrap gap-4">
              <LumoBadge :value="5" type="primary">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">主要</div>
              </LumoBadge>
              <LumoBadge :value="10" type="success">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">成功</div>
              </LumoBadge>
              <LumoBadge :is-dot="true" background-color="#87CEEB">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">自定义</div>
              </LumoBadge>
            </div>
          </div>

          <!-- 自定义徽标内容 -->
          <div>
            <h3 class="text-lg font-semibold mb-2">自定义徽标内容</h3>
            <div class="flex flex-wrap gap-4">
              <LumoBadge value="✓" background-color="#52c41a">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">完成</div>
              </LumoBadge>
              <LumoBadge value="✕" background-color="#ff4d4f">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">错误</div>
              </LumoBadge>
              <LumoBadge value="↓" background-color="#1890ff">
                <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">下载</div>
              </LumoBadge>
            </div>
          </div>
        </div>
      </section>

      <!-- Progress 组件测试 -->
      <section class="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4 text-gray-700">Progress 进度条</h2>
        <div class="space-y-4 max-w-md">
          <LumoProgress :percentage="progressValue" />
          <LumoProgress :percentage="progressValue" type="success" />
          <LumoProgress :percentage="progressValue" type="warning" />
          <LumoProgress :percentage="progressValue" type="danger" />
          <LumoProgress :percentage="progressValue" show-text />
          <div class="flex items-center space-x-2">
            <LumoButton @click="decreaseProgress" size="sm">-</LumoButton>
            <span class="text-sm">{{ progressValue }}%</span>
            <LumoButton @click="increaseProgress" size="sm">+</LumoButton>
          </div>
        </div>
      </section>

      <!-- Tabs 组件测试 -->
      <section class="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4 text-gray-700">Tabs 标签页</h2>
        <div class="space-y-6">
          <!-- 基础标签页 -->
          <div>
            <h3 class="text-lg font-semibold mb-2">基础用法</h3>
            <LumoTabs v-model="activeTab">
              <LumoTabPane name="tab1" label="标签一">
                <div class="p-4">这是标签一的内容</div>
              </LumoTabPane>
              <LumoTabPane name="tab2" label="标签二">
                <div class="p-4">这是标签二的内容</div>
              </LumoTabPane>
              <LumoTabPane name="tab3" label="标签三">
                <div class="p-4">这是标签三的内容</div>
              </LumoTabPane>
            </LumoTabs>
          </div>

          <!-- 卡片样式 -->
          <div>
            <h3 class="text-lg font-semibold mb-2">卡片样式</h3>
            <LumoTabs v-model="activeTab2" type="card">
              <LumoTabPane name="card1" label="卡片一">
                <div class="p-4">这是卡片一的内容</div>
              </LumoTabPane>
              <LumoTabPane name="card2" label="卡片二">
                <div class="p-4">这是卡片二的内容</div>
              </LumoTabPane>
            </LumoTabs>
          </div>
        </div>
      </section>

      <!-- Collapse 组件测试 -->
      <section class="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4 text-gray-700">Collapse 折叠面板</h2>
        <div class="max-w-md">
          <LumoCollapse v-model="collapseValue">
            <LumoCollapseItem name="item1" title="折叠面板1">
              <p class="p-4">这是折叠面板1的内容，可以放置任何内容。</p>
            </LumoCollapseItem>
            <LumoCollapseItem name="item2" title="折叠面板2">
              <div class="p-4">这是折叠面板2的内容，支持多个面板同时展开。</div>
            </LumoCollapseItem>
            <LumoCollapseItem name="item3" title="折叠面板3">
              <div class="p-4">这是折叠面板3的内容，点击标题可以切换展开状态。</div>
              <div class="p-4">这是折叠面板3的内容，点击标题可以切换展开状态。</div>
            </LumoCollapseItem>
          </LumoCollapse>
        </div>
      </section>

      <!-- Dialog 组件测试 -->
      <section class="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4 text-gray-700">Dialog 对话框</h2>
        <div class="space-x-2">
          <LumoButton @click="showDialog = true">打开对话框</LumoButton>
          <LumoButton @click="showConfirmDialog">确认对话框</LumoButton>
        </div>
        
        <LumoDialog
          v-model="showDialog"
          title="提示"
          message="这是一个简单的对话框内容"
        />
      </section>

      <!-- Toast 组件测试 -->
      <section class="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-4 text-gray-700">Toast 消息提示</h2>
        <div class="space-x-2">
          <LumoButton @click="showSuccessToast">成功提示</LumoButton>
          <LumoButton @click="showErrorToast">错误提示</LumoButton>
          <LumoButton @click="showWarningToast">警告提示</LumoButton>
          <LumoButton @click="showInfoToast">信息提示</LumoButton>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { useDialog, useToast } from 'lumoui'
import { useDialog } from '../../src'
import { useToast } from '../../src'
// 响应式数据
const inputValue = ref('')
const selectValue = ref('')
const switchValue = ref(false)
const switchValue2 = ref(true)
const switchValue3 = ref(false)
const progressValue = ref(60)
const activeTab = ref('tab1')
const activeTab2 = ref('card1')
const collapseValue = ref(['item1'])
const showDialog = ref(false)

// Select 选项
const selectOptions = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' },
  { label: '禁用选项', value: 'option4', disabled: true },
  { label: '选项五', value: 'option5' }
]

// Progress 控制
const increaseProgress = () => {
  if (progressValue.value < 100) {
    progressValue.value += 10
  }
}

const decreaseProgress = () => {
  if (progressValue.value > 0) {
    progressValue.value -= 10
  }
}

// Dialog 和 Toast
const { confirm } = useDialog()
const { success, error, warning, info } = useToast()

const showConfirmDialog = async () => {
  try {
    await confirm('确认要执行此操作吗？', '确认操作')
    success('操作成功！')
  } catch {
    info('操作已取消')
  }
}

const showSuccessToast = () => success('这是一个成功提示！')
const showErrorToast = () => error('这是一个错误提示！')
const showWarningToast = () => warning('这是一个警告提示！')
const showInfoToast = () => info('这是一个信息提示！')
</script>