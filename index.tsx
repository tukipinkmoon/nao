import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Palette, BookOpen, Leaf, Users, Sparkles, Star } from "lucide-react"

export default function SoulCallingPage() {
  const categories = [
    {
      title: "癒し",
      description: "心の奥深くにある平和を見つけ、魂の傷を優しく包み込む",
      icon: Heart,
      gradient: "from-rose-100 to-pink-100",
      iconColor: "text-rose-500",
      hoverGradient: "hover:from-rose-200 hover:to-pink-200",
    },
    {
      title: "創造性",
      description: "内なるアーティストを目覚めさせ、美しい表現を通じて魂を解放する",
      icon: Palette,
      gradient: "from-purple-100 to-violet-100",
      iconColor: "text-purple-500",
      hoverGradient: "hover:from-purple-200 hover:to-violet-200",
    },
    {
      title: "学び",
      description: "知識という光で心を照らし、成長という喜びを魂に刻む",
      icon: BookOpen,
      gradient: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-500",
      hoverGradient: "hover:from-blue-200 hover:to-cyan-200",
    },
    {
      title: "自然",
      description: "大地の鼓動と空の歌声に耳を傾け、生命の神秘と一つになる",
      icon: Leaf,
      gradient: "from-green-100 to-emerald-100",
      iconColor: "text-green-500",
      hoverGradient: "hover:from-green-200 hover:to-emerald-200",
    },
    {
      title: "つながり",
      description: "心と心を結ぶ見えない糸を感じ、愛という言葉を超えた絆を育む",
      icon: Users,
      gradient: "from-amber-100 to-orange-100",
      iconColor: "text-amber-500",
      hoverGradient: "hover:from-amber-200 hover:to-orange-200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-50 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-200 rounded-full opacity-60 animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Star className="h-6 w-6 text-indigo-400" />
              <div className="absolute inset-0 h-6 w-6 text-indigo-300 animate-ping opacity-20">
                <Star className="h-6 w-6" />
              </div>
            </div>
            <span className="text-xl font-light text-slate-700 tracking-wide">魂の呼び声</span>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Poetic Headline */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-white/20">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <span className="text-sm text-slate-600 font-light">内なる光を見つける旅</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 leading-tight">
                あなたの魂を
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-normal">
                  照らすもの
                </span>
                <br />
                は何ですか？
              </h1>
            </div>

            {/* Subtext */}
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                静寂の中で心の声に耳を傾けてください。
              </p>
              <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
                あなたの内側には、まだ発見されていない美しい世界が広がっています。
                深呼吸をして、魂が本当に求めているものを感じてみましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-light text-slate-700 mb-4">心の扉を開く五つの道</h2>
              <p className="text-slate-500 font-light max-w-xl mx-auto">
                それぞれの道があなたの魂の異なる側面を照らします。直感に従って選んでください。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
              {categories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Card
                    key={index}
                    className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-0 shadow-sm hover:shadow-xl bg-gradient-to-br ${category.gradient} ${category.hoverGradient} backdrop-blur-sm ${
                      index === 2 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                    }`}
                  >
                    <CardContent className="p-8 space-y-6 text-center h-full flex flex-col justify-center">
                      <div className="flex justify-center">
                        <div className="relative">
                          <div
                            className={`w-16 h-16 rounded-full bg-white/60 flex items-center justify-center group-hover:bg-white/80 transition-all duration-300`}
                          >
                            <IconComponent className={`h-8 w-8 ${category.iconColor}`} />
                          </div>
                          <div className="absolute inset-0 w-16 h-16 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-medium text-slate-700">{category.title}</h3>
                        <p className="text-sm text-slate-600 font-light leading-relaxed">{category.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-slate-700">今、この瞬間から</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                あなたの魂が待っています。恐れることはありません。
                <br />
                一歩ずつ、自分自身との美しい出会いを始めましょう。
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="px-12 py-4 bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 hover:to-purple-500 text-white font-light text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-full border-0"
              >
                旅を始める
              </Button>
            </div>

            <p className="text-sm text-slate-400 font-light italic">「千里の道も一歩から」</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-4 w-4 text-indigo-300" />
            <span className="text-sm text-slate-500 font-light">魂の呼び声</span>
          </div>
          <p className="text-xs text-slate-400 font-light">© 2024 あなたの内なる旅路を照らすために</p>
        </div>
      </footer>
    </div>
  )
}
