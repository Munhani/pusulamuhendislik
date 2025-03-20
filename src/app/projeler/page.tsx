export default function ProjelerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Projelerimiz</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Proje 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-video bg-gray-200 relative">
            <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">Proje Görseli</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Endüstriyel Tesis Projesi</h2>
            <p className="text-gray-600 mb-4">
              Modern bir üretim tesisi için kapsamlı mühendislik ve danışmanlık hizmetleri.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                Tasarım
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                İnşaat
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                Optimizasyon
              </span>
            </div>
          </div>
        </div>

        {/* Proje 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-video bg-gray-200 relative">
            <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">Proje Görseli</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Altyapı Geliştirme Projesi</h2>
            <p className="text-gray-600 mb-4">
              Şehir merkezi için kapsamlı altyapı ve ulaşım projesi.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                Yol
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                Köprü
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                Peyzaj
              </span>
            </div>
          </div>
        </div>

        {/* Proje 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-video bg-gray-200 relative">
            <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">Proje Görseli</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Yeşil Bina Projesi</h2>
            <p className="text-gray-600 mb-4">
              Sürdürülebilir ve enerji verimli ofis binası tasarımı.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                Mimari
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                Sürdürülebilirlik
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                Enerji
              </span>
            </div>
          </div>
        </div>

        {/* Proje 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-video bg-gray-200 relative">
            <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">Proje Görseli</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Harita ve Ölçüm Projesi</h2>
            <p className="text-gray-600 mb-4">
              Büyük ölçekli arazi ölçümü ve 3D modelleme projesi.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                Harita
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                Ölçüm
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                3D Modelleme
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 