
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function PipeFormingCalculator() {
  const [pipeDiameter, setPipeDiameter] = useState(43.75);
  const [wallThickness, setWallThickness] = useState(0.198);
  const [stripWidth, setStripWidth] = useState(59.449);

  const topRollSetting = Math.round((45 + (pipeDiameter - 43.75) * 0.75) * 10) / 10;
  const trager2Position = Math.round((175 + (pipeDiameter - 43.75) * 5) * 10) / 10;
  const rawHelixAngle = Math.asin(stripWidth / (Math.PI * pipeDiameter)) * (180 / Math.PI);
  const helixAngle = Math.round((90 - rawHelixAngle) * 100) / 100;

  return (
    <div className="relative max-w-xl mx-auto p-4 space-y-6 bg-zinc-700 min-h-screen">
      {/* Logo Text */}
      <div className="absolute top-4 left-0 right-0 flex justify-center z-0 opacity-40">
        <div className="text-[3rem] font-extrabold text-red-600 select-none pointer-events-none" style={{ fontFamily: 'Courier New, monospace', textShadow: '2px 2px 8px #000, -1px -1px 6px #444' }}>
          wen share profit?
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 space-y-6 pt-32">
        <Card className="bg-purple-800 border-2 border-red-600 rounded-2xl shadow-lg">
          <CardContent className="space-y-6 pt-6">
            <h2 className="text-2xl font-bold text-white text-center">Pipe Forming Calculator</h2>

            <div className="space-y-4">
              <Label className="text-white text-lg">Pipe Diameter (in)</Label>
              <div className="flex items-center gap-4">
                <Button className="text-white bg-red-600 text-xl w-12 h-12" onClick={() => setPipeDiameter(prev => Math.max(0, prev - 0.25))}>–</Button>
                <div className="flex-1 text-center text-white text-2xl">{pipeDiameter.toFixed(2)}</div>
                <Button className="text-white bg-green-600 text-xl w-12 h-12" onClick={() => setPipeDiameter(prev => prev + 0.25)}>+</Button>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-white text-lg">Wall Thickness (in)</Label>
              <div className="flex items-center gap-4">
                <Button className="text-white bg-red-600 text-xl w-12 h-12" onClick={() => setWallThickness(prev => Math.max(0, +(prev - 0.001).toFixed(3)))}>–</Button>
                <div className="flex-1 text-center text-white text-2xl">{wallThickness.toFixed(3)}</div>
                <Button className="text-white bg-green-600 text-xl w-12 h-12" onClick={() => setWallThickness(prev => +(prev + 0.001).toFixed(3))}>+</Button>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-white text-lg">Strip Width (in)</Label>
              <div className="flex items-center gap-4">
                <Button className="text-white bg-red-600 text-xl w-12 h-12" onClick={() => setStripWidth(prev => Math.max(0, +(prev - 0.01).toFixed(3)))}>–</Button>
                <div className="flex-1 text-center text-white text-2xl">{stripWidth.toFixed(3)}</div>
                <Button className="text-white bg-green-600 text-xl w-12 h-12" onClick={() => setStripWidth(prev => +(prev + 0.01).toFixed(3))}>+</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-800 border-2 border-red-600 rounded-2xl shadow-lg">
          <CardContent className="space-y-4 pt-6">
            <h2 className="text-xl font-medium text-white text-center">Recommended Settings</h2>
            <p className="text-white text-lg">Top Roll Gauge: <strong>{topRollSetting}</strong> mm</p>
            <p className="text-white text-lg">Träger 2 Position: <strong>{trager2Position}</strong> mm</p>
            <p className="text-white text-lg">Helix Angle: <strong>{helixAngle}</strong>°</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
