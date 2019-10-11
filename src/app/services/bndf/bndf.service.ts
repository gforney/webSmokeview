import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BndfService {

  buffer_vertices_node = null;
  buffer_textures_node = null;
  buffer_indices_node = null;

  show_node: boolean = true;
  bndf_file_ready: boolean = true;
  frame_bndf_node: number = 24;

  // boundary file triangles

  vertices_bndf_node = [
    0.75, 0.125, 0.00, 1.00, 0.125, 0.00, 1.00, 0.375, 0.00, 0.75, 0.375, 0.00,
    0.75, 0.125, 0.25, 1.00, 0.125, 0.25, 1.00, 0.375, 0.25, 0.75, 0.375, 0.25,
    0.75, 0.125, 0.00, 0.75, 0.375, 0.00, 0.75, 0.375, 0.25, 0.75, 0.125, 0.25,
    1.00, 0.125, 0.00, 1.00, 0.375, 0.00, 1.00, 0.375, 0.25, 1.00, 0.125, 0.25,
    0.75, 0.125, 0.00, 0.75, 0.125, 0.25, 1.00, 0.125, 0.25, 1.00, 0.125, 0.00,
    0.75, 0.375, 0.00, 0.75, 0.375, 0.25, 1.00, 0.375, 0.25, 1.00, 0.375, 0.00
  ];

  textures_bndf_node_data = new Uint8Array([
    0, 0, 0, 0,
    38, 38, 38, 38,
    76, 76, 76, 76,
    115, 115, 115, 115,
    153, 153, 153, 153,
    191, 191, 191, 191,
    191, 191, 191, 191,
    0, 0, 0, 0,
    38, 38, 38, 38,
    76, 76, 76, 76,
    115, 115, 115, 115,
    153, 153, 153, 153,
  ]);

  textures_bndf_node = new Float32Array([
    0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0
  ]);

  indices_bndf_node = [
    0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7,
    8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15,
    16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23
  ];

  constructor() { }
}