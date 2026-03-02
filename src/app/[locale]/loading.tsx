// app/loading.tsx
import { LoadingScreen } from "@/components/shared/LoadingScreen";

export default function GlobalLoading() {
  // Puedes pasarle textos genéricos para la navegación entre páginas
  return (
    <LoadingScreen 
      title="Accediendo al Sistema" 
      subtitle="Cargando módulos de JMK Robotics..." 
    />
  );
}